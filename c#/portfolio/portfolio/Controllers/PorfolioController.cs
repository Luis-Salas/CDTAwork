   using Microsoft.AspNetCore.Http;
   using Microsoft.AspNetCore.Mvc;
    namespace portfolio.Controllers     //be sure to use your own project's namespace!
    {
        public class PortfolioController : Controller   //remember inheritance??
        {
            [HttpGet("")]
            public ViewResult Index()
            {
                return View();
            }
            [HttpGet]
            [Route("projects")]
            public ViewResult projects()
            {
                System.Console.WriteLine("###########################");
                System.Console.WriteLine("made it to projects");
                return View("projects");
            }
            [HttpGet]
            [Route("contact")]
            public ViewResult contact()
            {
                return View("contact");
            }
        }
    }