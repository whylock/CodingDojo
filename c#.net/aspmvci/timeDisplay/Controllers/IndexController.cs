using Microsoft.AspNetCore.Mvc;
using System;
namespace timeDisplay.Controllers
{
    public class IndexController : Controller
    {
        [HttpGet("")]
        public IActionResult Index()
        {
            DateTime currentDate = DateTime.Now;

            ViewBag.DT = currentDate.ToString("MMM/dd/yyyy HH:mm tt");
            return View();
        }
    }
}