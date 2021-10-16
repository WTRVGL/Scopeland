using Library;
using Prism.Mvvm;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WpfDesktopApp.ViewModels
{
    public class ProductDetailViewModel : BaseViewModel
    {

        private Product _product;

        public ProductDetailViewModel(Product product)
        {
            Product = product;
        }

        public Product Product
        {
            get { return _product; }
            set { SetProperty(ref _product, value); }
        }

    }
}
