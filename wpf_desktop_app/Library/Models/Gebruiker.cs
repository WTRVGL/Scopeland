﻿using System;
using System.Collections.Generic;
using System.Text;

namespace Library
{
    public class Gebruiker
    {
        public int GebruikerID { get; set; }
        public string Email { get; set; }
        public string LastName { get; set; }
        public string FirstName { get; set; }
        public string PasswoordHash { get; set; }
        public string PasswoordSalt { get; set; }

    }
}
