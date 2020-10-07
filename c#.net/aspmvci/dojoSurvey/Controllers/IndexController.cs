using Microsoft.AspNetCore.Mvc;
namespace dojoSurvey.Controllers
{
    public class IndexController : Controller
    {
        [HttpGet("")]
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost("result")]
        public IActionResult StudentResult(string name, string location, string language, string textarea)
        {
            ViewBag.name = name;
            ViewBag.location = location;
            ViewBag.language = language;
            ViewBag.textarea = textarea;

            return View();
        }

        [HttpGet("result")]
        public IActionResult StudentRedirect()
        {
            return RedirectToAction("Index");
        }
    }
}