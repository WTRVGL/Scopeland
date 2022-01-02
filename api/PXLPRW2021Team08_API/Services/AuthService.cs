using System.Security;
using PXLPRW2021Team08_API.Models;
using PXLPRW2021Team08_API.Repositories;

namespace PXLPRW2021Team08_API.Services
{
    public class AuthService : IAuthService

    {

    private readonly IUserRepository _userRepository;
    private readonly ITokenService _tokenService;
    private readonly IHashPasswordService _hashPasswordService;

    public AuthService(IUserRepository userRepository, ITokenService tokenService, IHashPasswordService hashPasswordService)
    {
        _userRepository = userRepository;
        _tokenService = tokenService;
        _hashPasswordService = hashPasswordService;
    }


    /// <summary>
    /// Authenticates the user and returns True if succesful.
    /// </summary>
    /// <returns></returns>
    public AuthenticateResponse AuthenticateUser(AuthenticateRequest model)
    {
        var currentUser = _userRepository.GetUserByUserName(model.Username);

        if (currentUser.GebruikerID == 0)
        {
            return null;
        }

        var authenticated =
            _hashPasswordService.checkHash(model.Password, currentUser.PasswoordHash, currentUser.PasswoordSalt);

        if (!authenticated)
        {
            return null;
        }

        var authResult = _tokenService.getJwtSecurityToken((currentUser));

            
        return new AuthenticateResponse(currentUser, $"{authResult}");

    }

    }
}
