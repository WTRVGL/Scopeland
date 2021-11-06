using System;
using System.Collections.Generic;
using System.Text;

namespace Library
{
    public class Product
    {
        public int ProductID { get; set; }
        public string ProductNaam { get; set; }
        public decimal ProductPrijs { get; set; }
        public string ProductOmschrijving { get; set; }
        public string ProductMerk { get; set; }
        public string ProductType { get; set; }
        public int Stock { get; set; }
        public int AmountSold { get; set; }
    }
}
