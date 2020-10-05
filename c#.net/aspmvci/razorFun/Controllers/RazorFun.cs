using Microsoft.AspNetCore.Mvc;
namespace razorFun.Controllers
{
    public class RazorFun : Controller
    {
        [HttpGet("")]
        public ViewResult Index()
        {
            return View();
        }
    }
}