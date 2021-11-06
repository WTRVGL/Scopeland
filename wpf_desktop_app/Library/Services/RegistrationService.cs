using System;
using System.Collections.Generic;
using System.Text;

namespace Library.Services
{
    public class RegistrationService
    {
        public DataContext Data { get; set; }

        public RegistrationService()
        {
            Data = new DataContext();
        }

        public bool userAlreadyExists(string username)
        {
            var user = Data.GetUserByUserName(username);
            if (user.GebruikerID == 0)
            {
                return false;
            }
            return true;
        }

        public bool createNewUser(string username, string voornaam, string achternaam, string passwoord)
        {
            if (userAlreadyExists(username))
            {
                return false;
            }
            var data = new DataContext();
            data.CreateUser(username, voornaam, achternaam, passwoord);
            var createdUser = data.GetUserByUserName(username);
            return true;
        }
    }
}
