using ExampleAPI2.Data;
using ExampleAPI2.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ExampleAPI2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PeopleController : ControllerBase
    {
        private readonly RepositoryContext _repositoryContext;

        public PeopleController(RepositoryContext repositoryContext) 
        {
            _repositoryContext = repositoryContext;
        }

        // GET: api/<PeopleController>
        [HttpGet]
        [HttpGet]
        public IEnumerable<Person> Get()
        {
            return _repositoryContext.Set<Person>().AsNoTracking();
        }

        // GET api/<PeopleController>/5
        [HttpGet("{id}")]
        public Person Get(Guid id)
        {
            return _repositoryContext.Set<Person>().AsNoTracking().First(a => a.Id.Equals(id));
        }

        // POST api/<PeopleController>
        [HttpPost]
        public ActionResult Post([FromBody] Person person)
        {
            _repositoryContext.Set<Person>().Add(person);
            _repositoryContext.SaveChanges();
            return Ok(person);
        }

        // PUT api/<PeopleController>/5
        [HttpPut("{id}")]
        public void Put(Guid id, [FromBody] Person person)
        {
            _repositoryContext.Set<Person>().Update(person);
            _repositoryContext.SaveChanges();
        }

        // DELETE api/<PeopleController>/5
        [HttpDelete("{id}")]
        public void Delete(Guid id)
        {
            _repositoryContext.Set<Person>().Remove(Get(id));
            _repositoryContext.SaveChanges();
        }
    }
}
