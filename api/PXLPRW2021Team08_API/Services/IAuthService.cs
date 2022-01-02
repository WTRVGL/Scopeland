using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PXLPRW2021Team08_API.Models;

namespace PXLPRW2021Team08_API.Services
{
    public interface IAuthService
    {
        AuthenticateResponse AuthenticateUser(AuthenticateRequest model);
    }
}
