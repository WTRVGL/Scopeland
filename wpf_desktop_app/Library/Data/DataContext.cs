﻿using Library.Services;
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
            sqlConnection = new SqlConnection(@"Server=localhost,1000; Initial Catalog=PXLDigital_PRWA_WPL2_DB;User ID=SA; Password=Enterpasswordhere123#");
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
                        ProductID = (int)reader["ProductID"],
                        ProductNaam = (string)reader["ProductName"],
                        ProductPrijs = (decimal)reader["ProductPrice"],
                        ProductOmschrijving = (string)reader["ProductDescription"],
                        ProductMerk = (string)reader["ProductBrand"],
                        ProductCategory = (string)reader["ProductCategory"],
                        ProductType = (string)reader["ProductType"],
                        Stock = (int)reader["ProductStock"],
                        AmountSold = (int)reader["ProductAmountSold"],
                        FocalLength = (decimal)reader["ProductFocalLength"],
                        PriceSold = (decimal)reader["ProductPriceSold"],
                        Resolution = (decimal)reader["ProductResolution"],
                        Aperture = (decimal)reader["ProductAperture"],
                        Weight = (decimal)reader["ProductWeight"],
                        Difficulty = (string)reader["ProductDifficulty"],
                        DateLastSale = (DateTime)reader["ProductDateLastSale"],
                        DateFirstStockage = (DateTime)reader["ProductDateFirstStockage"]
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
                product.ProductID = (int)reader["ProductID"];
                product.ProductNaam = (string)reader["ProductName"];
                product.ProductPrijs = (decimal)reader["ProductPrice"];
                product.ProductOmschrijving = (string)reader["ProductDescription"];
                product.ProductMerk = (string)reader["ProductBrand"];
                product.ProductCategory = (string)reader["ProductCategory"];
                product.ProductType = (string)reader["ProductType"];
                product.Stock = (int)reader["ProductStock"];
                product.AmountSold = (int)reader["ProductAmountSold"];
                product.FocalLength = (decimal)reader["ProductFocalLength"];
                product.PriceSold = (decimal)reader["ProductPriceSold"];
                product.Resolution = (decimal)reader["ProductResolution"];
                product.Aperture = (decimal)reader["ProductAperture"];
                product.Weight = (decimal)reader["ProductWeight"];
                product.Difficulty = (string)reader["ProductDifficulty"];
                product.DateLastSale = (DateTime)reader["ProductDateLastSale"];
                product.DateFirstStockage = (DateTime)reader["ProductDateFirstStockage"];
            }

            reader.Close();
            return product;
        }

        public Product CreateProduct(Product product)
        {
            var dateFirstStockage = product.DateFirstStockage.Date.ToString("yyyy-MM-dd HH:mm:ss");
            var dateFirstSale= product.DateLastSale.Date.ToString("yyyy-MM-dd HH:mm:ss");
            var command = new SqlCommand(
                $"INSERT INTO Products(ProductName, ProductPrice, ProductDescription, ProductBrand, ProductCategory, ProductType, ProductStock, ProductAmountSold, ProductFocalLength, ProductPriceSold, ProductResolution, ProductAperture, ProductWeight, ProductDifficulty, ProductDateLastSale, ProductDateFirstStockage) " +
                $"VALUES('{product.ProductNaam}','{product.ProductPrijs}', '{product.ProductOmschrijving}', '{product.ProductMerk}', '{product.ProductCategory}', '{product.ProductType}', '{product.Stock}', '{product.AmountSold}', '{product.FocalLength}', '{product.PriceSold}', '{product.Resolution}', '{product.Aperture}', '{product.Weight}', '{product.Difficulty}', '{dateFirstSale}', '{dateFirstStockage}')", sqlConnection);
            command.Connection.Close();
            command.Connection.Open();
            var reader = command.ExecuteReader();
            reader.Close();

            return product;

        }

        public Product UpdateProduct(Product product)
        {
            var dateFirstStockage = product.DateFirstStockage.Date.ToString("yyyy-MM-dd HH:mm:ss");
            var dateFirstSale = product.DateLastSale.Date.ToString("yyyy-MM-dd HH:mm:ss");
            var command = new SqlCommand(
                $"Update Products " +
                $"SET   ProductName = '{product.ProductNaam}',  " +
                $"      ProductPrice = '{product.ProductPrijs}', " +
                $"      ProductDescription = '{product.ProductOmschrijving}'," +
                $"      ProductBrand = '{product.ProductMerk}', " +
                $"      ProductCategory = '{product.ProductCategory}', " +
                $"      ProductType = '{product.ProductType}', " +
                $"      ProductStock = '{product.Stock}', " +
                $"      ProductAmountSold = '{product.AmountSold}', " +
                $"      ProductFocalLength = '{product.FocalLength}', " +
                $"      ProductPriceSold = '{product.PriceSold}', " +
                $"      ProductResolution = '{product.Resolution}', " +
                $"      ProductAperture = '{product.Aperture}', " +
                $"      ProductWeight =  '{product.Weight}', " +
                $"      ProductDifficulty = '{product.Difficulty}', " +
                $"      ProductDateLastSale = '{dateFirstSale}', " +
                $"      ProductDateFirstStockage = '{dateFirstStockage}'" +
                $"WHERE ProductID = '{product.ProductID}'", sqlConnection);

            command.Connection.Close();
            command.Connection.Open();
            var reader = command.ExecuteReader();
            reader.Close();

            return product;

        }

        public bool DeleteProduct(int id)
        {
            throw new NotImplementedException();
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

            var command = new SqlCommand($"INSERT INTO Gebruikers(Email, FirstName, LastName, PasswoordHash, PasswoordSalt, Role) VALUES('{username}','{voornaam}', '{achternaam}', '{passwoordHash}', '{passwoordSalt}', 'user')", sqlConnection);
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

        
    }
}
