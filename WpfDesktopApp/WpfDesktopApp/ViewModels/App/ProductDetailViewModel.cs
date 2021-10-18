using Library;

namespace WpfDesktopApp.ViewModels
{
    public class ProductDetailViewModel : ViewModelBase
    {
        private Product _product;

        public Product Product
        {
            get { return _product; }
            set { SetProperty(ref _product, value); }
        }

        public ProductDetailViewModel(Product product)
        {
            Product = product;
        }
    }
}
