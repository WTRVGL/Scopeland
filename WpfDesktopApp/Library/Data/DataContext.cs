using Core.Services;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Text;

namespace Library
{
    public class DataContext : IDataContext
    {
        private SqlConnection SqlConnection { get; set; }

        public DataContext()
        {
            SqlConnection = new SqlConnection(@"Data Source=WTRVGL-LENO\SQLEXPRESS;Initial Catalog=PXLDigital_PRW_WPL;Integrated Security=True;");
        }



        public Product GetProduct(int id)
        {
            var command = new SqlCommand($"SELECT * FROM Products WHERE ProductId = {id}", SqlConnection);
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

            return product;
        }

        public List<Product> GetProducts()
        {
            var command = new SqlCommand($"SELECT * FROM Products", SqlConnection);
            command.Connection.Open();
            var reader = command.ExecuteReader();
            var products = new List<Product>();
            while (reader.Read())
            {
                products.Add(
                    new Product {
                        ProductID = reader.GetInt32(0), 
                        ProductNaam = reader.GetString(1), 
                        ProductPrijs = reader.GetDecimal(2),
                        ProductOmschrijving = reader.GetString(3),
                        ProductMerk = reader.GetString(4)
            });
            }

            return products;
        }

        public Gebruiker GetUser(int id)
        {
            var command = new SqlCommand($"SELECT * FROM Gebruikers WHERE Id = {id}", SqlConnection);
            command.Connection.Open();
            var reader = command.ExecuteReader();
            var gebruiker = new Gebruiker();
            while (reader.Read())
            {
                gebruiker.GebruikerID = reader.GetInt32(0);
                gebruiker.Voornaam = reader.GetString(1);
                gebruiker.Naam = reader.GetString(2);
                gebruiker.PasswoordHash = (string)reader["PasswoordHash"];
                gebruiker.PasswoordSalt = reader.GetString(4);
            }

            return gebruiker;
        }

        public List<Gebruiker> GetUsers()
        {
            throw new NotImplementedException();
        }

        public void CreateUser(string voornaam, string achternaam, string passwoord)
        {
            var user = new Gebruiker { Naam = achternaam, Voornaam = voornaam };

            var service = new HashPasswordService(passwoord);
            user.PasswoordHash = service.HashBase64;
            user.PasswoordSalt = service.SaltBase64;


            var command = new SqlCommand($"INSERT INTO Gebruikers(Voornaam, Achternaam, PasswoordHash, PasswoordSalt) VALUES('{voornaam}', '{achternaam}', '{user.PasswoordHash}', '{user.PasswoordSalt}')", SqlConnection);
            command.Connection.Open();
            var reader = command.ExecuteReader();


        }

    }
}
