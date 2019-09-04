   using Microsoft.AspNetCore.Http;
   using Microsoft.AspNetCore.Mvc;
    namespace dojoSurvey.Controllers   
    {
        public class surveyController : Controller 
        {
            [HttpGet("")]
            public ViewResult index()
            {
                return View();
            }
            [HttpPost("form")]
            public IActionResult Method(string name, string location, string language, string comment)
            {
                    var surveyInfo = new {
                    Name = name,
                    Location = location,
                    Language = language,
                    Comment = comment
                    };
                    System.Console.WriteLine("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
                    System.Console.WriteLine(surveyInfo);
                return RedirectToAction("success", surveyInfo);
                }
            [HttpGet("success")]
            public ViewResult success(string Name, string Location, string Language, string Comment)
            {
     
            System.Console.WriteLine("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");

                ViewBag.name = Name;
                ViewBag.comment = Comment;
                ViewBag.language = Language;
                ViewBag.location = Location;
                return View("success");
            }
        }
    }