using Core.Business.Services.Abstract;
using Core.Business.Services.Models;
using Core.Data.Abstract;
using Core.Entity.Entities;
using Core.Infrastructure.Helper;
using Core.Infrastructure.ViewModels;
using Microsoft.Extensions.Options;

namespace Core.Business.Services
{
    public class UpdateTransportationStatusService : BaseService, IUpdateTransportationStatusService
    {
        public UpdateTransportationStatusService(Microsoft.Extensions.Logging.ILogger<dynamic> logger,
            IOptions<AppSettings> optionsAccessor,
            IUnitOfWork unitOfWork) : base(logger, optionsAccessor, unitOfWork)
        {
        }

        public ResponseViewModel UpdateTransportationStatus(int transportationsId, int transportationStatusId)
        {
            Transportation transportation = _unitOfWork.RepositoryR<Transportation>().GetSingle(transportationsId);
            if (transportation != null)
            {
                // Kiểm tra tất cả các chuyến xe của booking đã hoàn tất chuyến => Cập nhật booking hoàn tát
                if (transportationStatusId == IdentityHelper.TransportationStatus.Done)
                {
                    var isHasNotFinsish = _unitOfWork.RepositoryR<Transportation>().Any(x => x.BookingId == transportation.BookingId && x.Id != transportationsId && x.TransportationStatusId != IdentityHelper.TransportationStatus.Done);
                    if (!isHasNotFinsish)
                    {
                        Booking booking = _unitOfWork.RepositoryR<Booking>().GetSingle(transportation.BookingId);
                        booking.BookingStatusId = IdentityHelper.BookingStatus.Done;
                    }

                    Vehicle vehicle = _unitOfWork.RepositoryR<Vehicle>().GetSingle(x => x.Id == transportation.VehicleId);
                    vehicle.VehicleStatusId = IdentityHelper.VehicleStatus.Free;
                }

                transportation.TransportationStatusId = transportationStatusId;
                _unitOfWork.RepositoryCRUD<Transportation>().Update(transportation);
                _unitOfWork.Commit();
            }

            return ResponseViewModel.CreateSuccess(transportation);
        }
    }
}
