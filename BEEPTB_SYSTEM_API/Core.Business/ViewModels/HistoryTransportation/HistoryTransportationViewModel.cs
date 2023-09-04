using Core.Entity.Abstract;
using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Business.ViewModels.HistoryTransportation
{
    public class HistoryTransportationViewModel: IEntityBase
    {
        public HistoryTransportationViewModel() { }

        public int Id { get; set; }
        public bool IsEnabled { get; set; }
        public DateTime? CreatedWhen { get; set; }
        public int? TransportationId { get; set; }
        public int? BookingDepartureId { get; set; }
        public int? BookingDestinationId { get; set; }
        public int? TransportationStatusId { get; set; }
        public int? SupplierUserId { get; set; }
    }
}
