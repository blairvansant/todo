using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using Todo.Models;

namespace Todo.DAL
{
    public class ToDoContext: DbContext
    {
        public DbSet<ToDo> ToDos { get; set; }
    }
}