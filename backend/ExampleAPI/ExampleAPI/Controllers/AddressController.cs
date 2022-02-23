using ExampleAPI.Data;
using ExampleAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ExampleAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AddressController : ControllerBase
    {
        private readonly RepositoryContext _repositoryContext;

        public AddressController(RepositoryContext repositoryContext)
        {
            _repositoryContext = repositoryContext;
        }
        
        // GET: api/<AddressController>
        [HttpGet]
        public IEnumerable<Address> Get()
        {
            return _repositoryContext.Set<Address>().AsNoTracking();
        }

        // GET api/<AddressController>/5
        [HttpGet("{id}")]
        public Address Get(Guid id)
        {
            return _repositoryContext.Set<Address>().AsNoTracking().First(a => a.Id.Equals(id));
        }

        // POST api/<AddressController>
        [HttpPost]
        public ActionResult Post([FromBody] Address address)
        {
            _repositoryContext.Set<Address>().Add(address);
            _repositoryContext.SaveChanges();
            return Ok(address);
        }

        // PUT api/<AddressController>/5
        [HttpPut("{id}")]
        public void Put(Guid id, [FromBody] Address address)
        {
            _repositoryContext.Set<Address>().Update(address);
            _repositoryContext.SaveChanges();
        }

        // DELETE api/<AddressController>/5
        [HttpDelete("{id}")]
        public void Delete(Guid id)
        {
            _repositoryContext.Set<Address>().Remove(Get(id));
            _repositoryContext.SaveChanges();
        }
    }
}
