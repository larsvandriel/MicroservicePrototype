using Confluent.Kafka;
using ExampleAPI.Models;
using System.Text.Json;

namespace ExampleAPI.Kafka
{
    public class KafkaContext: IKafkaProducer
    {
        public void CreateAddress(Address address)
        {
            SendMessage("CreateAddress", JsonSerializer.Serialize(address.Id));
        }

        public void DeleteAddress(Address address)
        {
            SendMessage("DeleteAddress", JsonSerializer.Serialize(address.Id));
        }

        public void SendMessage(string topic, string message)
        {
            var config = new ProducerConfig
            {
                BootstrapServers = "kafka:9092"
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
