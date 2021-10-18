using Library;
using Prism.Commands;
using System;
using System.Collections.ObjectModel;
using System.Windows.Forms;
using System.Windows.Input;

namespace WpfDesktopApp.ViewModels
{
    public class MainWindowViewModel : ViewModelBase
    {

        private ViewModelBase _selectedViewModel;
        private Gebruiker _currentUser;


        public ICommand ShowProductsCommand { get; set; }
        public ICommand ShowProductDetailCommand { get; set; }
        public ICommand ShowHomeCommand { get; set; }
        public ICommand ShowUsersCommand { get; set; }


        public Gebruiker CurrentUser
        {
            get { return _currentUser; }
            set { SetProperty(ref _currentUser, value); }
        }

        public ViewModelBase SelectedViewModel
        {
            get { return _selectedViewModel; }
            set { SetProperty(ref _selectedViewModel, value); }
        }


        public MainWindowViewModel()
        {
            ShowProductsCommand = new DelegateCommand(
                () => SelectedViewModel = new ProductsViewModel());

            ShowProductDetailCommand = new DelegateCommand<Product>(
                product => SelectedViewModel = new ProductDetailViewModel(product));

            ShowHomeCommand = new DelegateCommand(
                () => SelectedViewModel = new HomeViewModel());

            ShowUsersCommand = new DelegateCommand(
                () => SelectedViewModel = new UsersViewModel());

            SelectedViewModel = new HomeViewModel();
        }
    }
}