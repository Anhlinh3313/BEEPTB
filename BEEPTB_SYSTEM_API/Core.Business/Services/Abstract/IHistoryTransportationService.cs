using Core.Business.ViewModels.HistoryTransportation;
using Core.Infrastructure.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Core.Business.Services.Abstract
{
    public interface IHistoryTransportationService
    {
        ResponseViewModel CreateHistoryTransportation(HistoryTransportationViewModel model);
        ResponseViewModel UpdateHistoryTransportation(HistoryTransportationViewModel model);
        ResponseViewModel DeleteHistoryTransportation(HistoryTransportationViewModel model);
    }
}
