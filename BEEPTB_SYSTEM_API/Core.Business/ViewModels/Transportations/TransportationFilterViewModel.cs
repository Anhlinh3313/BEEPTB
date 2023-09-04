using Core.Entity.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Business.ViewModels.Transportations
{
    public class TransportationFilterViewModel
    {
        public TransportationFilterViewModel()
        {
        }

        public int? Id { get; set; }
        public string Code { get; set; }
        public int? VehicleTypeId { get; set; }
        public int? VehicleId { get; set; }
        public int? BranchId { get; set; }
        public int? UserId { get; set; }
        public int? ServiceId { get; set; }
        public int? TransportationStatusId { get; set; }
        public string TransportationStatusIds { get; set; }
        public int? BookingId { get; set; }
        public int? PageNumber { get; set; }
        public int? PageSize { get; set; }
        public string SearchText { get; set; }
    }
}
