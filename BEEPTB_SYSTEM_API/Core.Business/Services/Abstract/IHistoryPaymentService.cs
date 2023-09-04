using Core.Business.ViewModels.HistoryPayments;
using Core.Infrastructure.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Business.Services.Abstract
{
    public interface IHistoryPaymentService
    {
        ResponseViewModel CreateHistoryPayment(HistoryPaymentViewModel model);
    }
}
