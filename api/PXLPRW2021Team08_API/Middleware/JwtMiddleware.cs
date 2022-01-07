using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Options;
using PXLPRW2021Team08_API.Repositories;
using PXLPRW2021Team08_API.Services;

namespace PXLPRW2021Team08_API.Middleware
{
    public class JwtMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly ITokenService _tokenService;
        private readonly IUserRepository _userRepository;

        public JwtMiddleware(RequestDelegate next, ITokenService tokenService, IUserRepository userRepository)
        {
            _next = next;
            _tokenService = tokenService;
            _userRepository = userRepository;
        }

        public async Task Invoke(HttpContext context)
        {
            var token = context.Request.Cookies["Jwtkoek"];
            
            if (token != null)
            {
                var jwtSecurityToken = _tokenService.decodeJwtSecurityToken(token);
                var id = _tokenService.ExtractIdFromJwtSecurityToken(jwtSecurityToken);
                // attach user to context on successful jwt validation
                context.Items["User"] = _userRepository.GetUser(id);
            }

            await _next(context);
        }
    }
}
