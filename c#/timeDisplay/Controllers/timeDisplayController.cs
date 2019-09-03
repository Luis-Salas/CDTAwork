   using Microsoft.AspNetCore.Http;
   using Microsoft.AspNetCore.Mvc;
   using System.Globalization;
   using System;
    namespace timeDisplay.Controllers     //be sure to use your own project's namespace!
    {
        public class timeDisplayController : Controller   //remember inheritance??
        {
            [HttpGet("")]
            public ViewResult index()
            {
                DateTime localDate = DateTime.Now;
                ViewBag.time = localDate;

                return View();
            }
        }
    }