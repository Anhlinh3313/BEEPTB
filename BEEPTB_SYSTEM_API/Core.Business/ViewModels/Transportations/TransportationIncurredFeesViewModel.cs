using Core.Entity.Abstract;
using Core.Entity.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Business.ViewModels.TransportationIncurredFees
{
    public class TransportationIncurredFeesViewModel: IEntityBase
    {
        public TransportationIncurredFeesViewModel()
        {
        }

        public int Id { get; set; }
        public bool IsEnabled { get; set; }
        public int? TransportationId { get; set; }
        public int? IncurredFeeId { get; set; }
        public double? IncurredFee { get; set; }
        public string Note { get; set; }
    }
}
