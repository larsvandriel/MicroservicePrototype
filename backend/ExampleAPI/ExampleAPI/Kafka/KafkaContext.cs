using Confluent.Kafka;
using ExampleAPI.Models;
using System.Text.Json;

namespace ExampleAPI.Kafka
{
    public class KafkaContext: IKafkaProducer
    {
        private readonly Uri _kafkaUri;
        public KafkaContext(IConfiguration config)
        {
            _kafkaUri = new Uri(config.GetValue<string>("Urls:Kafka"));
        }

        public void CreateAddress(Address address)
        {
            SendMessage("Create Address", JsonSerializer.Serialize(address.Id));
        }

        public void DeleteAddress(Address address)
        {
            SendMessage("Delete Address", JsonSerializer.Serialize(address.Id));
        }

        public void SendMessage(string topic, string message)
        {
            var config = new ProducerConfig
            {
                BootstrapServers = "kafka:29092"
            };

            Action<DeliveryReport<Null, string>> handler = r =>
             Console.Out.WriteLine(!r.Error.IsError
             ? $"Delivered message to {r.TopicPartitionOffset}"
             : $"Delivery Error: {r.Error.Reason}");

            using var p = new ProducerBuilder<Null, string>(config).Build();
            p.Produce(topic, new Message<Null, string> { Value = message }, handler);

            p.Flush(TimeSpan.FromSeconds(10));
        }
    }
}
