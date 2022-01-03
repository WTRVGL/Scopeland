using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PXLPRW2021Team08_CORE.Models;

namespace PXLPRW2021Team08_API.Repositories
{
    public interface IProductRepository
    {
        List<Product> GetProducts();
        Product GetProduct(int id);
        Product CreateProduct(Product product);
        Product UpdateProduct(Product product);
        bool DeleteProduct(int id);
        
    }
}
