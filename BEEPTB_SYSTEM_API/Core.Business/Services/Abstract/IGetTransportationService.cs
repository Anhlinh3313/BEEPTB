using Core.Business.ViewModels.Customers;
using Core.Business.ViewModels.TransportationIncurredFees;
using Core.Business.ViewModels.Transportations;
using Core.Infrastructure.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Business.Services.Abstract
{
    public interface IGetTransportationService
    {
        ResponseViewModel GetCurrentTransportation(int currentUserId);
        ResponseViewModel GetListCurrentTransportationApp(CurrentTransportationAppFilterViewModel filterViewModel);
        ResponseViewModel GetCurrentTransportationDetailApp(CurrentTransportationAppFilterViewModel filterViewModel);
    }
}
