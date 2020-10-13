using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using dojosurvey_model.Models;

namespace dojosurvey_model.Controllers
{
    public class HomeController : Controller
    {
        [HttpGet("/")]
        public IActionResult Index()
        {
                return View();
        }

        [HttpPost("Result")]
        public IActionResult Result(Survey survey)
        {
            if(ModelState.IsValid)
            {
                return View(survey);
            }
            return View("Index");
        }

        public IActionResult Redirect()
        {
            return RedirectToAction("Index");
        }
    }
}
