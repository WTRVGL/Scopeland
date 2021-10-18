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

        //public Gebruiker createNewUser(Gebruiker user)
        //{
            
        //}
    }
}
