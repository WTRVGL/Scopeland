using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PXLPRW2021Team08_API.Models;
using PXLPRW2021Team08_API.Repositories;
using PXLPRW2021Team08_API.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PXLPRW2021Team08_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        [HttpGet]
        public IActionResult CheckAuthentication()
        {
            Gebruiker user = (Gebruiker)HttpContext.Items["User"];
            if (user == null)
            {
                return (Forbid());
            }


            Response.Cookies.Append("scopelandId", $"{user.GebruikerID}", new CookieOptions()
            {
                Expires = DateTimeOffset.Now.AddHours(24),
                Path = "/",
                HttpOnly = false,
                Secure = true,
                SameSite = SameSiteMode.None
            });


            return Ok(user);


        }
    }
}
