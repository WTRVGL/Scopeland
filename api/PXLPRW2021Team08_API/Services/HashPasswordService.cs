﻿using System;
using System.Collections.Generic;
using System.Security.Cryptography;
using System.Text;
using PXLPRW2021Team08_API.Services;

namespace PXLPRW2021Team08_API.Services
{
    public partial class HashPasswordService : IHashPasswordService
    {
        private readonly byte[] saltBytes;

        public HashPasswordService()
        {
            saltBytes = new byte[14];
        }

        /// <summary>
        /// Generate a hash and salt tuple from a password.
        /// </summary>
        /// <param name="password">The entered password</param>
        /// <returns>Hash as Item 1, Salt as Item 2</returns>
        public Tuple<string, string> generateHashAndSalt(string password)
        {
            var rng = new RNGCryptoServiceProvider();
            rng.GetBytes(saltBytes);
            var saltBase64 = Convert.ToBase64String(saltBytes);

            

            var rfc = new Rfc2898DeriveBytes(password, saltBytes);
            var hashBytes = rfc.GetBytes(20);
            var hashBase64 = Convert.ToBase64String(hashBytes);

            return new Tuple<string, string>(hashBase64, saltBase64);

        }

        /// <summary>
        /// Hashes an inputted password using a supplied Salt and compares it to the supplied Hash
        /// </summary>
        /// <param name="password"></param>
        /// <param name="hashBase64"></param>
        /// <param name="saltBase64"></param>
        /// <returns></returns>
        public bool checkHash(string password, string hashBase64, string saltBase64)
        {
            if (password == null)
            {
                return false;
            }

            var rfc = new Rfc2898DeriveBytes(password, Convert.FromBase64String(saltBase64));
            var checkBytes = rfc.GetBytes(20);
            var checkBytesBase64 = Convert.ToBase64String(checkBytes);

            if (hashBase64 == checkBytesBase64)
            {
                return true;
            }

            return false;
        }

        

    }
}
