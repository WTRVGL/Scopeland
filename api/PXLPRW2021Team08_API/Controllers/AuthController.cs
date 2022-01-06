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
        private readonly IUserRepository _userRepository;
        private readonly ITokenService _tokenService;

        public AuthController(IUserRepository userRepository, ITokenService tokenService)
        {
            _userRepository = userRepository;
            _tokenService = tokenService;
        }

        [HttpGet]
        public IActionResult CheckAuthentication()
        {
            var token = HttpContext.Request.Cookies["JWTkoek"];

            if (token == null) return Ok(new Gebruiker { Email = null});

            var decodedToken = _tokenService.decodeJwtSecurityToken(token);
            var id = decodedToken.Claims.FirstOrDefault(claim => claim.Type == "id");

            var user = _userRepository.GetUser(Convert.ToInt32(id.Value));


            return Ok(user);
        }
    }
}
