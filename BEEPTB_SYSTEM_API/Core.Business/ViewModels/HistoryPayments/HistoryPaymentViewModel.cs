using Core.Entity.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Business.ViewModels.HistoryPayments
{
    public class HistoryPaymentViewModel : EntitySimple
    {
        public HistoryPaymentViewModel()
        {

        }

        public int TransportationId { get; set; }
        public double TotalFee { get; set; }
    }
}
