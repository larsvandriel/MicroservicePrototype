using ExampleAPI.Models;

namespace ExampleAPI.Kafka
{
    public interface IKafkaProducer
    {
        void CreateAddress(Address address);

        void DeleteAddress(Address address);
    }
}
