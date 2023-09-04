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
    public interface IBookingService
    {
        ResponseViewModel GetListBookings(BookingFilterViewModel viewModel);
        ResponseViewModel GetBookingDetail(int bookingId);
        ResponseViewModel GetListCoordinate(BookingFilterViewModel viewModel);
        ResponseViewModel GetCoordinateDetail(int bookingId);
        ResponseViewModel Accept(BookingUpdateStatusModel model);
        ResponseViewModel Reject(BookingUpdateStatusModel model);
        ResponseViewModel Cancel(BookingUpdateStatusModel model); 
        ResponseViewModel CoordinateVehicle(CoordinateVehicleViewModel model);
        ResponseViewModel GetBookingByCustomerId(int customerId);


        // Customer
        ResponseViewModel Create(BookingViewModel model);
        ResponseViewModel GetListBookingsByCurrentCustomer(BookingFilterViewModel viewModel, int customerId);
        ResponseViewModel GetCurrentBookingByCurrentCustomer(int customer);
        ResponseViewModel CustomerCancel(BookingUpdateStatusModel model, int customer);
    }
}
