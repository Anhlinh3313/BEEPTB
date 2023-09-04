using Core.Business.ViewModels.Customers;
using Core.Business.ViewModels.TransportationIncurredFees;
using Core.Infrastructure.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Business.Services.Abstract
{
    public interface ITransportationIncurredFeesService
    {
        ResponseViewModel Create(TransportationIncurredFeesViewModel model);
        ResponseViewModel Update(TransportationIncurredFeesViewModel model);
        ResponseViewModel Delete(int? id);
    }
}
