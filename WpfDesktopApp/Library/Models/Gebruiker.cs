using System;
using System.Collections.Generic;
using System.Text;

namespace Library
{
    public class Gebruiker
    {
        public int GebruikerID { get; set; }
        public string Naam { get; set; }
        public string Voornaam { get; set; }
        public string Email { get; set; }
        public byte[] PasswoordHash { get; set; }
        public int PasswoordSalt { get; set; }
    }
}
