using Core.Entity.Abstract;
using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Entity.Entities
{
    public class TransportationIncurredFees: IEntityBase
    {
        public int Id { get; set; }
        public bool IsEnabled { get; set; }
        public int? IncurredFeeId { get; set; }
        public int? TransportationId { get; set; }
        public double? IncurredFee { get; set; }
        public string Note { get; set; }
    }
}
