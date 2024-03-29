﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PXLPRW2021Team08_API.Services
{
    public interface IHashPasswordService
    {
        Tuple<string, string> generateHashAndSalt(string password);
        bool checkHash(string password, string hashBase64, string saltBase64);
    }
}
