﻿using System;
using System.Collections.Generic;
using System.Text;

namespace Library
{
    interface IDataContext
    {
        List<Product> GetProducts();
        Product GetProduct(int id);
        List<Gebruiker> GetUsers();
        Gebruiker GetUser(int id);
    }
}