using Library;
using Prism.Commands;
using System;
using System.Collections.ObjectModel;
using System.Windows.Forms;
using System.Windows.Input;

namespace WpfDesktopApp.ViewModels
{
    public class MainWindowViewModel : BaseViewModel
    {

        private BaseViewModel _selectedViewModel;

        public ICommand ShowProductsCommand { get; set; }
        public ICommand ShowProductDetailCommand { get; set; }
        public ICommand TestCommand { get; set; }

        public BaseViewModel SelectedViewModel
        {
            get { return _selectedViewModel; }
            set { SetProperty(ref _selectedViewModel, value); }
        }


        public MainWindowViewModel()
        {
            SelectedViewModel = new ProductsViewModel();
            ShowProductsCommand = new DelegateCommand(
                () => SelectedViewModel = new ProductsViewModel());
            ShowProductDetailCommand = new DelegateCommand<Product>(
                product => SelectedViewModel = new ProductDetailViewModel(product));
            TestCommand = new DelegateCommand(() => MessageBox.Show("Clicked"));
        }

       
    }
}