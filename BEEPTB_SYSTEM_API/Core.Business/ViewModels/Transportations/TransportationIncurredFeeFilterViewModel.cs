using Core.Entity.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Business.ViewModels.Transportations
{
    public class TransportationIncurredFeeFilterViewModel
    {
        public TransportationIncurredFeeFilterViewModel()
        {
        }

        public int? TransportationId { get; set; }
        public int? IncurredFeeId { get; set; }
        public int? PageNumber { get; set; }
        public int? PageSize { get; set; }
    }
}
