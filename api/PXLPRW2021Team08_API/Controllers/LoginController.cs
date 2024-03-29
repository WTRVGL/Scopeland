﻿using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PXLPRW2021Team08_API.Models;
using PXLPRW2021Team08_API.Services;
using Microsoft.AspNetCore.Http;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace PXLPRW2021Team08_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly IAuthService _authService;

        public LoginController(IAuthService authService)
        {
            _authService = authService;
        }

        // POST api/<AuthController>
        [HttpPost]
        public IActionResult Authenticate([FromBody] AuthenticateRequest request)
        {
            var response =  _authService.AuthenticateUser(request);
            if (response == null)
            {
                return Unauthorized("username or password incorrect");
            }

            Response.Cookies.Append("JWTkoek", $"{response.Token}", new CookieOptions()
            {
                Expires = DateTimeOffset.Now.AddHours(24),
                Path = "/",
                HttpOnly = true,
                Secure = true,
                SameSite= SameSiteMode.None
            });

            Response.Cookies.Append("scopelandId", $"{response.User.GebruikerID}", new CookieOptions()
            {
                Expires = DateTimeOffset.Now.AddHours(24),
                Path = "/",
                HttpOnly = false,
                Secure = true,
                SameSite = SameSiteMode.None
            });


            return Ok(response.User);
        }

    }
}
