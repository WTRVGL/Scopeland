using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PXLPRW2021Team08_API.Models;

namespace PXLPRW2021Team08_API.Repositories
{
    public interface IUserRepository
    {
        List<Gebruiker> GetUsers();
        Gebruiker GetUser(int id);
        Gebruiker GetUserByUserName(string username);
        Gebruiker CreateUser(string username, string voornaam, string achternaam, string passwoord);
    }
}
