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
        public ICommand ShowHomeCommand { get; set; }

        public Gebruiker CurrentUser { get; set; }

        public BaseViewModel SelectedViewModel
        {
            get { return _selectedViewModel; }
            set { SetProperty(ref _selectedViewModel, value); }
        }


        public MainWindowViewModel()
        {
            SelectedViewModel = new HomeViewModel();

            ShowProductsCommand = new DelegateCommand(
                () => SelectedViewModel = new ProductsViewModel());
            ShowProductDetailCommand = new DelegateCommand<Product>(
                product => SelectedViewModel = new ProductDetailViewModel(product));
            ShowHomeCommand = new DelegateCommand(
                () => SelectedViewModel = new HomeViewModel());

            CurrentUser = new Gebruiker { Naam = "Vangeel", Voornaam = "Wouter" };
        }

       
    }
}