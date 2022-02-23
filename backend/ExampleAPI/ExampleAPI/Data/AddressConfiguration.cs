using ExampleAPI.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace ExampleAPI.Data
{
    public class AddressConfiguration : IEntityTypeConfiguration<Address>
    {
        public void Configure(EntityTypeBuilder<Address> builder)
        {
            builder.HasKey(a => a.Id);
            builder.Property(a => a.Country).IsRequired();
            builder.Property(a => a.City).IsRequired();
            builder.Property(a => a.Street).IsRequired();
            builder.Property(a => a.Number).IsRequired();
            builder.Property(a => a.Zipcode).IsRequired();
        }
    }
}