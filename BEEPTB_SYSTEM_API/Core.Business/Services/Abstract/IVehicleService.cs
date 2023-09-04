using Core.Business.ViewModels.Bookings;
using Core.Business.ViewModels.PriceServices;
using Core.Entity.Entities;
using Core.Infrastructure.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Core.Business.Services.Abstract
{
    public interface IVehicleService
    {
        ResponseViewModel VehicleSuggestion(int transportationId, int? branchId);
    }
}
