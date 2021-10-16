using System;
using System.Collections.Generic;
using System.Security.Cryptography;
using System.Text;

namespace Core.Services
{
    public class HashPasswordService
    {
        private string Password { get; set; }
        private int Salt { get; set; }
        private Byte[] Hash { get; set; }


        public int GetSalt()
        {
            return Salt;
        }

        public Byte[] GetHash()
        {
            return Hash;
        }


        public HashPasswordService(string password)
        {
            Password = password;
            Salt = new Random().Next(10000000, 99999999);
            var x = new Rfc2898DeriveBytes(Password, Salt);
            Hash = x.GetBytes(20);
        }

        public bool CheckPassword(int salt, byte[] hash, string password)
        {
            var x = new Rfc2898DeriveBytes(password, salt);
            var bytes = x.GetBytes(20);

            if (bytes == hash)
            {
                return true;
            }

            return false;
        }
    }
}
