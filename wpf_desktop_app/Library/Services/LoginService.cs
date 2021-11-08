namespace Library.Services
{
    public class LoginService
    {
        private readonly string _username;
        private readonly string _password;

        public Gebruiker CurrentUser { get; set; }

        public LoginService(string username, string password)
        {
            _username = username;
            _password = password;
        }

        /// <summary>
        /// Authenticates the user and returns True if succesful.
        /// </summary>
        /// <returns></returns>
        public bool authenticateUser()
        {
            var data = new DataContext();
            CurrentUser = data.GetUserByUserName(_username);

            if (CurrentUser.GebruikerID == 0)
            {
                return false;
            }

            var passwordService = new HashPasswordService();
            var result = passwordService.checkHash(_password, CurrentUser.PasswoordHash, CurrentUser.PasswoordSalt);

           
            return result;
        }

    }
}
