using System;
using Core.Entity.Abstract;

namespace Core.Entity.Entities
{
    public class HistoryPayment : EntitySimple
    {
        public HistoryPayment()
        {
        }

        public int TransportationId { get; set; }
        public double TotalFee { get; set; }
    }
}
