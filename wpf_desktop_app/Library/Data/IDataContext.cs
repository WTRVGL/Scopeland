using System;
using System.Collections.Generic;
using System.Text;

namespace Library
{
    interface IDataContext
    {
        List<Product> GetProducts();
        Product GetProduct(int id);
        Product CreateProduct(Product product);
        Product UpdateProduct(Product product);
        bool DeleteProduct(int id);
        List<Gebruiker> GetUsers();
        Gebruiker GetUser(int id);
        Gebruiker GetUserByUserName(string username);
        Gebruiker CreateUser(string username, string voornaam, string achternaam, string passwoord);
    }
}
