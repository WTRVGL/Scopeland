using Library.Services;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Text;

namespace Library
{
    public class DataContext : IDataContext
    {
        private readonly SqlConnection sqlConnection;

        public DataContext()
        {
            sqlConnection = new SqlConnection(@"Data Source=localhost\SQLEXPRESS;Initial Catalog=PXLDigital_PRWA_WPL2_DB;Integrated Security=True;");
        }

        public List<Product> GetProducts()
        {
            var command = new SqlCommand($"SELECT * FROM Products", sqlConnection);
            command.Connection.Open();
            var reader = command.ExecuteReader();
            var products = new List<Product>();
            while (reader.Read())
            {
                products.Add(
                    new Product
                    {
                        ProductID = reader.GetInt32(0),
                        ProductNaam = reader.GetString(1),
                        ProductPrijs = reader.GetDecimal(2),
                        ProductOmschrijving = reader.GetString(3),
                        ProductMerk = reader.GetString(4)
                    });
            }
            reader.Close();
            return products;
        }

        public Product GetProduct(int id)
        {
            var command = new SqlCommand($"SELECT * FROM Products WHERE ProductId = {id}", sqlConnection);
            command.Connection.Open();
            var reader = command.ExecuteReader();
            var product = new Product();

            while (reader.Read())
            {
                product.ProductID = reader.GetInt32(0);
                product.ProductNaam = reader.GetString(1);
                product.ProductPrijs = reader.GetInt32(2);
                product.ProductOmschrijving = reader.GetString(3);
                product.ProductMerk = reader.GetString(4);
            }

            reader.Close();
            return product;
        }

        

        public Gebruiker GetUser(int id)
        {
            var command = new SqlCommand($"SELECT * FROM Gebruikers WHERE Id = {id}", sqlConnection);
            command.Connection.Open();
            var reader = command.ExecuteReader();
            var gebruiker = new Gebruiker();
            while (reader.Read())
            {
                gebruiker.GebruikerID = (int)reader["UserId"];
                gebruiker.Email = (string)reader["Email"];
                gebruiker.FirstName = (string)reader["FirstName"];
                gebruiker.LastName = (string)reader["LastName"];
                gebruiker.PasswoordHash = (string)reader["PasswoordHash"];
                gebruiker.PasswoordSalt = (string)reader["PasswoordSalt"];
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
                        GebruikerID = (int)reader["UserId"],
                        Email = (string)reader["Email"],
                        FirstName = (string)reader["FirstName"],
                        LastName = (string)reader["LastName"],
                        PasswoordHash = (string)reader["PasswoordHash"],
                        PasswoordSalt = (string)reader["PasswoordSalt"]
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

            var command = new SqlCommand($"INSERT INTO Gebruikers(Email, FirstName, LastName, PasswoordHash, PasswoordSalt) VALUES('{username}','{voornaam}', '{achternaam}', '{passwoordHash}', '{passwoordSalt}')", sqlConnection);
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
                gebruiker.GebruikerID = (int)reader["UserId"];
                gebruiker.Email = (string)reader["Email"];
                gebruiker.FirstName = (string)reader["FirstName"];
                gebruiker.LastName = (string)reader["LastName"];
                gebruiker.PasswoordHash = (string)reader["PasswoordHash"];
                gebruiker.PasswoordSalt = (string)reader["PasswoordSalt"];
            }

            reader.Close();


            return gebruiker;
        }

        public Product CreateProduct(Product product)
        {
            throw new NotImplementedException();
        }
    }
}
