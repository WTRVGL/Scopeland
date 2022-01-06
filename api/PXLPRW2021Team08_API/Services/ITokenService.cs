using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Threading.Tasks;
using PXLPRW2021Team08_API.Models;

namespace PXLPRW2021Team08_API.Services
{
    public interface ITokenService
    {
        string getJwtSecurityToken(Gebruiker user);
        JwtSecurityToken decodeJwtSecurityToken(string token);

    }
}
