using Core.Business.ViewModels.Customers;
using Core.Infrastructure.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Business.Services.Abstract
{
    public interface ICustomerService
    {
        ResponseViewModel CreateCustomer(CustomerViewModel model);
        ResponseViewModel UpdateCustomer(CustomerViewModel model);
        ResponseViewModel GetCustomerByUserId(int userId);
    }
}
