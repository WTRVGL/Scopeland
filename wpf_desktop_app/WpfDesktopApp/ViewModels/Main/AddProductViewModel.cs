using Library;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WpfDesktopApp.ViewModels.Main
{
    public class AddProductViewModel : ViewModelBase
    {
        private Product _product;

        public Product Product
        {
            get { return _product; }
            set { SetProperty( ref _product, value); }
        }

        public AddProductViewModel()
        {
            Product = new Product();
        }
    }
}
