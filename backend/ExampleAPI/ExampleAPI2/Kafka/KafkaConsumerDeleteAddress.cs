using Confluent.Kafka;
using ExampleAPI2.Data;

namespace ExampleAPI2.Kafka
{
    public class KafkaConsumerDeleteAddress : IHostedService
    {
        private readonly string topic = "DeleteAddress";
        private readonly RepositoryContext _repository;

        public KafkaConsumerDeleteAddress(RepositoryContext repository)
        {
            _repository = repository;
        }

        public Task StartAsync(CancellationToken cancellationToken)
        {
            var conf = new ConsumerConfig
            {
                GroupId = "st_consumer_group",
                BootstrapServers = "kafka:9092",
                AutoOffsetReset = AutoOffsetReset.Earliest
            };
            using (var builder = new ConsumerBuilder<Ignore, string>(conf).Build())
            {
                builder.Subscribe(topic);
                var cancelToken = new CancellationTokenSource();
                try
                {
                    while (true)
                    {
                        var consumer = builder.Consume(cancelToken.Token);
                        Console.WriteLine($"Message: {consumer.Message.Value} received from {consumer.TopicPartitionOffset}");
                    }
                }
                catch (Exception)
                {
                    builder.Close();
                }
            }
            return Task.CompletedTask;
        }
        public Task StopAsync(CancellationToken cancellationToken)
        {
            return Task.CompletedTask;
        }
    }
}
