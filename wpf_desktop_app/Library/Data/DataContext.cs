﻿using Core.Services;
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
            SqlConnection = new SqlConnection(@"Data Source=localhost\SQLEXPRESS;Initial Catalog=PXLDigital_PRWA_WPL2_DB;Integrated Security=True;");
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
            reader.Close();
            return product;
        }

        

        public Gebruiker GetUser(int id)
        {
            var command = new SqlCommand($"SELECT * FROM Gebruikers WHERE Id = {id}", SqlConnection);
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

        public List<Gebruiker> GetUsers()
        {
            throw new NotImplementedException();
        }



        public void CreateUser(string username, string voornaam, string achternaam, string passwoord)
        {
            var service = new HashPasswordService(passwoord);
            var passwoordHash = service.HashBase64;
            var passwoordSalt = service.SaltBase64;


            var command = new SqlCommand($"INSERT INTO Gebruikers(Email, FirstName, LastName, PasswoordHash, PasswoordSalt) VALUES('{username}','{voornaam}', '{achternaam}', '{passwoordHash}', '{passwoordSalt}')", SqlConnection);
            command.Connection.Close();
            command.Connection.Open();
            var reader = command.ExecuteReader();
            reader.Close();


        }

        public Gebruiker GetUserByUserName(string username)
        {

            var command = new SqlCommand($"SELECT * FROM Gebruikers WHERE Email = '{username}'", SqlConnection);
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

    }
}