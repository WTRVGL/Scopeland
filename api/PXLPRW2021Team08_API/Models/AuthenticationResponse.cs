
namespace PXLPRW2021Team08_API.Models
{
    public class AuthenticateResponse
    {
        public int Id { get; set; }
        public string Token { get; set; }


        public AuthenticateResponse(Gebruiker user, string token)
        {
            Id = user.GebruikerID;
            Token = token;
        }
    }
}
