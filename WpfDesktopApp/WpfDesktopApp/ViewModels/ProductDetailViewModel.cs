using Library;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WpfDesktopApp.ViewModels
{
    public class ProductDetailViewModel : BaseViewModel
    {
        public ProductDetailViewModel(Product product)
        {
            Product = product;
        }

        public Product Product{ get; set; }
    }
}
