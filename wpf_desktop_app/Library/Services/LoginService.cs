
using Core.Services;

namespace Library.Services
{
    public class LoginService
    {
        public Gebruiker CurrentUser { get; set; }
        public string Password { get; set; }
        private DataContext Data { get; set; }

        public LoginService(string username, string password)
        {
            Data = new DataContext();
            CurrentUser = Data.GetUserByUserName(username);
            Password = password;
        }

        /// <summary>
        /// Authenticates the user and returns True if succesful.
        /// </summary>
        /// <returns></returns>
        public bool authenticateUser()
        {
            if (CurrentUser.GebruikerID == 0)
            {
                return false;
            }

            var passwordService = new HashPasswordService();
            var result = passwordService.checkHash(Password, CurrentUser.PasswoordHash, CurrentUser.PasswoordSalt);

           
            return result;
        }

    }
}
