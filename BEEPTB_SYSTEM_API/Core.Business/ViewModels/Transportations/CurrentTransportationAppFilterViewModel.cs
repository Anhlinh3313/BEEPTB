using Core.Entity.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Business.ViewModels.Transportations
{
    public class CurrentTransportationAppFilterViewModel
    {
        public CurrentTransportationAppFilterViewModel()
        {
        }

        public int? TransportationId { get; set; }
        public int? UserId { get; set; }
        public int? TransportationStatusId { get; set; }
        public string TransportationStatusIds { get; set; }
        public int? PageNumber { get; set; }
        public int? PageSize { get; set; }
        public string SearchText { get; set; }
    }
}
