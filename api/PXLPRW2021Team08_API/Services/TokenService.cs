﻿using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using PXLPRW2021Team08_API.Models;
using PXLPRW2021Team08_API.Repositories;

namespace PXLPRW2021Team08_API.Services
{
    public class TokenService : ITokenService
    {
        private readonly IUserRepository _userRepository;
        private readonly IHashPasswordService _hashPasswordService;

        private readonly string securityKey = "eW93YXNzdXBwb3Bpc2VwaWNyZWVlZWVlZWVlZWVlZWU=";
        public TokenService(IUserRepository userRepository, IHashPasswordService hashPasswordService)
        {
            _userRepository = userRepository;
            _hashPasswordService = hashPasswordService;
        }

        public string getJwtSecurityToken(Gebruiker user)
        {
            var claims = new List<Claim>
            {
                new Claim("username", user.Email),
                new Claim("id", user.GebruikerID.ToString()),
                new Claim("role", user.Role)
            };

            var token = new JwtSecurityToken(
                issuer: "http://localhost:5001",
                audience: "http://localhost:8000",
                claims: claims,
                expires: DateTime.UtcNow.AddDays(30),
                notBefore: DateTime.UtcNow,
                signingCredentials: new SigningCredentials(new SymmetricSecurityKey(Convert.FromBase64String(securityKey)), SecurityAlgorithms.HmacSha256));


            var tokenString = new JwtSecurityTokenHandler().WriteToken(token);

            return tokenString;
        }

        public JwtSecurityToken decodeJwtSecurityToken(string token)
        {
            return new JwtSecurityTokenHandler().ReadJwtToken(token);
        }

        public int ExtractIdFromJwtSecurityToken(JwtSecurityToken securityToken)
        {
            var idClaim =  securityToken.Claims.FirstOrDefault(claim => claim.Type == "id");
            return int.Parse(idClaim.Value);
        }
    }
}