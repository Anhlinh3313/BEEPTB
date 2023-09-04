using Core.Entity.Abstract;
using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Entity.Entities
{
    public class HistoryTransportation: IEntityBase
    {
        public HistoryTransportation() { }

        public int Id { get; set; }
        public bool IsEnabled { get; set; }
        public DateTime CreatedWhen { get; set; }
        public int? BookingDepartureId { get; set; }
        public int? BookingDestinationId { get; set; }
        public int? TransportationId { get; set; }
        public int? TransportationStatusId { get; set; }
    }
}
