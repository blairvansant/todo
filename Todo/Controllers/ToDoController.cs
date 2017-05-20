using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Todo.DAL;
using Todo.Models;

namespace Todo.Controllers
{
    public class ToDoController : ApiController
    {
        private ToDoContext _context;

        //Use Dependency Injection instead
        public ToDoController()
        {
            _context = new ToDoContext();
        }

        [Route("api/todo")]
        public List<ToDo> GetAll()
        {
            return _context.ToDos.ToList();
        }

        [Route("api/todo")]
        [HttpPost]
        public void Add(ToDo newToDo)
        {
            _context.ToDos.Add(newToDo);
            _context.SaveChanges();
        }
    }
}
