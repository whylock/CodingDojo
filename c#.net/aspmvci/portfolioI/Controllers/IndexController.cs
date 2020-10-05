using System.Net.Cache;
using System.Net;
using Microsoft.AspNetCore.Mvc;
namespace portfolioI.Controllers
{
    public class IndexController : Controller
    {
        [HttpGet("")]
        public string Index()
        {
            return "This is my index";
        }

        [HttpGet("projects")]
        public string Projects()
        {
            return "These are my projects!";
        }

        [HttpGet("contact")]
        public string Contact()
        {
            return "This is my Contact";
        }
    }
}