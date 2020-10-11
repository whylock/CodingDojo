using System.Net;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using viewmodel_fun.Models;

namespace viewmodel_fun.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            ViewData["Title"] = "Here is a Message";
            Message msg = new Message()
            {
                content = "Default root route message"
            };

            return View(msg);
        }
        [HttpGet("numbers")]
        public IActionResult Numbers()
        {
            ViewData["Title"] = "Here are some numbers!";
            Numbers num = new Numbers()
            {
                numList = new List<int> { 1, 2, 34, 5, 6, 5 }
            };
            return View(num);
        }
        [HttpGet("users")]
        public IActionResult Users()
        {
            ViewData["Title"] = "Here are Users!";
            Users users = new Users()
            {
                userList = new List<string> { "user one", "user two", "user three" }
            };
            return View(users);
        }

        [HttpGet("user")]
        public IActionResult User()
        {
            ViewData["Title"] = "Here is a User!";
            User user = new User()
            {
                user = "User one"
            };
            return View(user);
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
