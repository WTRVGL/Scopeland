using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using PXLPRW2021Team08_API.Models;
using PXLPRW2021Team08_API.Services;

namespace PXLPRW2021Team08_API.Repositories
{
    public class UserRepositorySql: IUserRepository

    {

    private readonly SqlConnection sqlConnection;

    public UserRepositorySql()
    {
            //sqlConnection =new SqlConnection(@"Server=ms-sql-server; Initial Catalog=PXLDigital_PRWA_WPL2_DB;User ID=SA; Password=Enterpasswordhere123#");
            sqlConnection = new SqlConnection(@"Server=localhost,1000; Initial Catalog=PXLDigital_PRWA_WPL2_DB;User ID=SA; Password=Enterpasswordhere123#");

        }



        public Gebruiker GetUser(int id)
    {
        var command = new SqlCommand($"SELECT * FROM Gebruikers WHERE UserId = {id}", sqlConnection);
        command.Connection.Close();
        command.Connection.Open();
        var reader = command.ExecuteReader();
        var gebruiker = new Gebruiker();
        while (reader.Read())
        {
            gebruiker.GebruikerID = (int) reader["UserId"];
            gebruiker.Email = (string) reader["Email"];
            gebruiker.FirstName = (string) reader["FirstName"];
            gebruiker.LastName = (string) reader["LastName"];
            gebruiker.PasswoordHash = (string) reader["PasswoordHash"];
            gebruiker.PasswoordSalt = (string) reader["PasswoordSalt"];
            gebruiker.Role = (string) reader["Role"];
        }

        reader.Close();
        return gebruiker;
    }

    //NEEDS TEST
    public List<Gebruiker> GetUsers()
    {
        var command = new SqlCommand($"SELECT * FROM Gebruikers", sqlConnection);
        command.Connection.Open();
        var reader = command.ExecuteReader();
        var users = new List<Gebruiker>();
        while (reader.Read())
        {
            users.Add(
                new Gebruiker
                {
                    GebruikerID = (int) reader["UserId"],
                    Email = (string) reader["Email"],
                    FirstName = (string) reader["FirstName"],
                    LastName = (string) reader["LastName"],
                    PasswoordHash = (string) reader["PasswoordHash"],
                    PasswoordSalt = (string) reader["PasswoordSalt"],
                    Role = (string)reader["Role"]
            });
        }

        reader.Close();
        return users;
    }

    public Gebruiker CreateUser(string username, string voornaam, string achternaam, string passwoord)
    {
        var service = new HashPasswordService();

        Tuple<string, string> passwordHashSaltTuple = service.generateHashAndSalt(passwoord);

        var passwoordHash = passwordHashSaltTuple.Item1;
        var passwoordSalt = passwordHashSaltTuple.Item2;

        var command =
            new SqlCommand(
                $"INSERT INTO Gebruikers(Email, FirstName, LastName, PasswoordHash, PasswoordSalt) VALUES('{username}','{voornaam}', '{achternaam}', '{passwoordHash}', '{passwoordSalt}')",
                sqlConnection);
        command.Connection.Close();
        command.Connection.Open();
        var reader = command.ExecuteReader();
        reader.Close();

        return GetUserByUserName(username);

    }

    public Gebruiker GetUserByUserName(string username)
    {

        var command = new SqlCommand($"SELECT * FROM Gebruikers WHERE Email = '{username}'", sqlConnection);
        command.Connection.Close();
        command.Connection.Open();
        var reader = command.ExecuteReader();
        var gebruiker = new Gebruiker();
        while (reader.Read())
        {
            gebruiker.GebruikerID = (int) reader["UserId"];
            gebruiker.Email = (string) reader["Email"];
            gebruiker.FirstName = (string) reader["FirstName"];
            gebruiker.LastName = (string) reader["LastName"];
            gebruiker.PasswoordHash = (string) reader["PasswoordHash"];
            gebruiker.PasswoordSalt = (string) reader["PasswoordSalt"];
            gebruiker.Role = (string)reader["Role"];
        }

        reader.Close();


        return gebruiker;
    }
    }
}
