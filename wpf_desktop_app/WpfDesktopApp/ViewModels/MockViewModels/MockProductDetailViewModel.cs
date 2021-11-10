using Library;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WpfDesktopApp.ViewModels.MockViewModels
{
    public class MockProductDetailViewModel : ViewModelBase
    {
        public Product Product { get; set; }

        public MockProductDetailViewModel()
        {
            Product = new Product
            {
                AmountSold = 231,
                ProductID = 34,
                ProductMerk = "Skywatcher",
                ProductNaam = "Esprit 150 Super Apochromatic Refractor",
                ProductOmschrijving = "Epic scoper",
                ProductPrijs = 5432,
                ProductType = "Refractor",
                Stock = 15
            };
        }
    }
}
