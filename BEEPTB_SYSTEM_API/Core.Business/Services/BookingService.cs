using AutoMapper;
using Core.Business.Services.Abstract;
using Core.Business.Services.Models;
using Core.Business.ViewModels.Bookings;
using Core.Business.ViewModels.Locations;
using Core.Business.ViewModels.PriceServices;
using Core.Business.ViewModels.SignalRHub;
using Core.Business.ViewModels.VehicleTypes;
using Core.Data;
using Core.Data.Abstract;
using Core.Data.Core;
using Core.Entity.Entities;
using Core.Entity.Procedures;
using Core.Infrastructure.Helper;
using Core.Infrastructure.Utils;
using Core.Infrastructure.ViewModels;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Core.Business.Services
{
    public partial class BookingService : BaseService, IBookingService
    {
        protected readonly IPriceServiceService _iPriceServiceService;
        protected readonly ILocationService _iLocationService;
        protected readonly ISignalRHubService _iSignalRHubService;

        public BookingService(Microsoft.Extensions.Logging.ILogger<dynamic> logger,
            IOptions<AppSettings> optionsAccessor,
            IUnitOfWork unitOfWork,
            IPriceServiceService iPriceServiceService,
            ILocationService iLocationService,
            ISignalRHubService iSignalRHubService
            ) : base(logger, optionsAccessor, unitOfWork)
        {
            _iPriceServiceService = iPriceServiceService;
            _iLocationService = iLocationService;
            _iSignalRHubService = iSignalRHubService;
        }

        public ResponseViewModel GetListBookings(BookingFilterViewModel viewModel)
        {
            var data = _unitOfWork.Repository<Proc_GetListBookings>().ExecProcedure(Proc_GetListBookings.GetEntityProc(viewModel.Id, viewModel.ServiceId, viewModel.CustomerId,
                viewModel.BranchId, viewModel.BookingStatusId, viewModel.Code, viewModel.PageNumber, viewModel.PageSize, viewModel.SearchText, viewModel.BookingStatusIds, viewModel.VehicleTypeId,
                viewModel.FromDate, viewModel.ToDate));

            return ResponseViewModel.CreateSuccess(data);
        }

        public ResponseViewModel GetBookingDetail(int bookingId)
        {
            var booking = _unitOfWork.Repository<Proc_GetListBookings>().ExecProcedureSingle(Proc_GetListBookings.GetEntityProc(bookingId));
            if (booking == null)
            {
                return ResponseViewModel.CreateError("Không tìm thấy booking");
            }

            return ResponseViewModel.CreateSuccess(booking);
        }

        public ResponseViewModel GetListCoordinate(BookingFilterViewModel viewModel)
        {
            var data = _unitOfWork.Repository<Proc_GetListCoordinate>().ExecProcedure(Proc_GetListCoordinate.GetEntityProc(viewModel.Id, viewModel.ServiceId, viewModel.CustomerId,
                viewModel.BranchId, viewModel.BookingStatusId, viewModel.Code, viewModel.PageNumber, viewModel.PageSize, viewModel.SearchText, viewModel.TransportationStatusIds, viewModel.VehicleTypeId, viewModel.TransportationStatusId,
                viewModel.FromDate, viewModel.ToDate));

            return ResponseViewModel.CreateSuccess(data);
        }

        public ResponseViewModel GetCoordinateDetail(int bookingId)
        {
            var booking = _unitOfWork.Repository<Proc_GetListCoordinate>().ExecProcedureSingle(Proc_GetListCoordinate.GetEntityProc(bookingId));
            if (booking == null)
            {
                return ResponseViewModel.CreateError("Không tìm thấy booking");
            }

            return ResponseViewModel.CreateSuccess(booking);
        }

        public ResponseViewModel GetListBookingsByCurrentCustomer(BookingFilterViewModel viewModel, int customerId)
        {
            var data = _unitOfWork.Repository<Proc_GetListBookings>().ExecProcedure(Proc_GetListBookings.GetEntityProc(viewModel.Id, viewModel.ServiceId, customerId,
                viewModel.BranchId, viewModel.BookingStatusId, viewModel.Code, viewModel.PageNumber, viewModel.PageSize, viewModel.SearchText, viewModel.BookingStatusIds, viewModel.VehicleTypeId,
                viewModel.FromDate, viewModel.ToDate));

            return ResponseViewModel.CreateSuccess(data);
        }


        public ResponseViewModel GetCurrentBookingByCurrentCustomer(int customerId)
        {
            var currentStatus = new int[]
            {
                IdentityHelper.BookingStatus.New,
                IdentityHelper.BookingStatus.Accepted,
                IdentityHelper.BookingStatus.Processed
            };


            return ResponseViewModel.CreateSuccess();
        }

        public ResponseViewModel Create(BookingViewModel model)
        {
            // Validate
            if (!model.CustomerId.HasValue)
                return ResponseViewModel.CreateError("Vui lòng chọn khách hàng");

            if (!model.ServiceId.HasValue)
                return ResponseViewModel.CreateError("Vui lòng nhập dịch vụ");

            if (!model.StartDate.HasValue)
                return ResponseViewModel.CreateError("Vui lòng nhập ngày bắt đầu");

            if (!model.EndDate.HasValue)
                return ResponseViewModel.CreateError("Vui lòng nhập ngày kết thúc");

            if (!model.VehicleTypeId.HasValue)
                return ResponseViewModel.CreateError("Vui lòng nhập loại xe");

            if (string.IsNullOrEmpty(model.Address))
                return ResponseViewModel.CreateError("Vui lòng nhập địa chỉ");

            // Tính lại giá booking
            CalculateFilterViewModel calculateFilterViewModel = new CalculateFilterViewModel();
            calculateFilterViewModel.ServiceId = model.ServiceId;
            calculateFilterViewModel.VehicleTypeId = model.VehicleTypeId;
            calculateFilterViewModel.StartDate = model.StartDate;
            calculateFilterViewModel.EndDate = model.EndDate;
            var res = _iPriceServiceService.Calculate(calculateFilterViewModel);

            if (!res.IsSuccess)
            {
                return ResponseViewModel.CreateError(res.Message);
            }

            Proc_PriceService priceService = res.Data as Proc_PriceService;
            Booking booking = new Booking();

            using (var context = new ApplicationContext())
            {
                var unitOfWork2 = new UnitOfWork(context);

                // Tạo mới Booking
                booking.BookingStatusId = IdentityHelper.BookingStatus.New;
                booking.CustomerId = model.CustomerId;
                booking.StartDate = model.StartDate;
                booking.EndDate = model.EndDate;
                booking.Address = model.Address;
                booking.AddressDetail = model.AddressDetail;
                booking.Note = model.Note;
                booking.ServiceId = model.ServiceId;
                booking.TotalTime = priceService.Value;
                booking.BranchId = 1;

                unitOfWork2.RepositoryCRUD<Booking>().Insert(booking);
                unitOfWork2.Commit();

                booking.Code = $"BK{RandomUtil.GetCodeNumber(booking.Id, 6)}";
                booking.Name = booking.Code;
                unitOfWork2.Commit();

                // Tạo chuyến xe
                Transportation transportation = new Transportation();
                transportation.BookingId = booking.Id;
                transportation.RentalFee = priceService.Price;
                transportation.VehicleTypeId = model.VehicleTypeId.Value;
                transportation.TransportationStatusId = IdentityHelper.TransportationStatus.New;
                unitOfWork2.RepositoryCRUD<Transportation>().Insert(transportation);
                unitOfWork2.Commit();

                transportation.Code = $"T{RandomUtil.GetCodeNumber(transportation.Id, 6)}";
                transportation.Name = transportation.Code;
                unitOfWork2.Commit();
            }

            //_iSignalRHubService.SendNotifications(resGetListSupplierUser.Select(x => x.UserId.ToString()).ToList(), SignalRHelper.NotificationName.NewBooking, notificationBooking);

            return ResponseViewModel.CreateSuccess(booking);
        }

        public ResponseViewModel Accept(BookingUpdateStatusModel model)
        {
            var booking = _unitOfWork.RepositoryR<Booking>().GetSingle(model.BookingId);
            if (booking == null)
            {
                return ResponseViewModel.CreateError("Không tìm thấy booking");
            }

            if (booking.BookingStatusId != IdentityHelper.BookingStatus.New)
            {
                return ResponseViewModel.CreateError("Trạng thái booking không hợp lệ");
            }

            booking.BookingStatusId = IdentityHelper.BookingStatus.Accepted;
            booking.ModifiedWhen = new DateTime();

            List<Transportation> transportations = _unitOfWork.RepositoryR<Transportation>().FindBy(x => x.BookingId == booking.Id).ToList();
            foreach (var transportation in transportations)
            {
                transportation.TransportationStatusId = IdentityHelper.TransportationStatus.Processing;
            }

            _unitOfWork.Commit();

            return ResponseViewModel.CreateSuccess("Xác nhận thành công");
        }

        public ResponseViewModel Reject(BookingUpdateStatusModel model)
        {
            var booking = _unitOfWork.RepositoryR<Booking>().GetSingle(model.BookingId);
            if (booking == null)
            {
                return ResponseViewModel.CreateError("Không tìm thấy booking");
            }

            if (booking.BookingStatusId != IdentityHelper.BookingStatus.New)
            {
                return ResponseViewModel.CreateError("Trạng thái booking không hợp lệ");
            }

            if (!model.ReasonId.HasValue)
            {
                return ResponseViewModel.CreateError("Vui lòng chọn lý do");
            }

            booking.BookingStatusId = IdentityHelper.BookingStatus.Reject;
            booking.ReasonId = model.ReasonId;
            booking.ModifiedWhen = new DateTime();

            List<Transportation> transportations = _unitOfWork.RepositoryR<Transportation>().FindBy(x => x.BookingId == booking.Id).ToList();
            foreach (var transportation in transportations)
            {
                transportation.TransportationStatusId = IdentityHelper.TransportationStatus.Cancel;
            }

            _unitOfWork.Commit();

            return ResponseViewModel.CreateSuccess("Từ chối thành công");
        }

        public ResponseViewModel Cancel(BookingUpdateStatusModel model)
        {
            // Trạng thái không được phép huỷ
            int[] notAllowBookingStatusIds = {
                IdentityHelper.BookingStatus.Cancel,
                IdentityHelper.BookingStatus.CustomerCancel,
                IdentityHelper.BookingStatus.Reject,
                IdentityHelper.BookingStatus.Done,
                IdentityHelper.BookingStatus.New,
            };

            var booking = _unitOfWork.RepositoryR<Booking>().GetSingle(model.BookingId);
            if (booking == null)
            {
                return ResponseViewModel.CreateError("Không tìm thấy booking");
            }

            if (notAllowBookingStatusIds.Contains(booking.BookingStatusId))
            {
                return ResponseViewModel.CreateError("Trạng thái booking không hợp lệ");
            }

            if (!model.ReasonId.HasValue)
            {
                return ResponseViewModel.CreateError("Vui lòng chọn lý do");
            }

            booking.BookingStatusId = IdentityHelper.BookingStatus.Cancel;
            booking.ReasonId = model.ReasonId;

            List<Transportation> transportations = _unitOfWork.RepositoryR<Transportation>().FindBy(x => x.BookingId == booking.Id).ToList();
            foreach (var transportation in transportations)
            {
                transportation.TransportationStatusId = IdentityHelper.TransportationStatus.Cancel;
            }

            _unitOfWork.Commit();

            return ResponseViewModel.CreateSuccess("Hủy thành công");
        }

        public ResponseViewModel CustomerCancel(BookingUpdateStatusModel model, int customerId)
        {
            // Trạng thái được phép huỷ
            int[] allowBookingStatusIds = {
                IdentityHelper.BookingStatus.New,
                IdentityHelper.BookingStatus.Accepted
            };

            var booking = _unitOfWork.RepositoryR<Booking>().GetSingle(x => x.Id == model.BookingId && x.CustomerId == customerId);
            if (booking == null)
            {
                return ResponseViewModel.CreateError("Không tìm thấy booking");
            }

            if (!allowBookingStatusIds.Contains(booking.BookingStatusId))
            {
                return ResponseViewModel.CreateError("Trạng thái booking không hợp lệ");
            }

            if (model.ReasonId.HasValue)
            {
                return ResponseViewModel.CreateError("Vui lòng nhập lý do");
            }

            booking.BookingStatusId = IdentityHelper.BookingStatus.CustomerCancel;
            booking.ReasonId = model.ReasonId;

            List<Transportation> transportations = _unitOfWork.RepositoryR<Transportation>().FindBy(x => x.BookingId == booking.Id).ToList();
            foreach (var transportation in transportations)
            {
                transportation.TransportationStatusId = IdentityHelper.TransportationStatus.Cancel;
            }

            _unitOfWork.Commit();

            return ResponseViewModel.CreateSuccess("Hủy thành công");
        }

        public ResponseViewModel CoordinateVehicle(CoordinateVehicleViewModel model)
        {
            // Trạng thái được phép điều xe
            int[] allowTransportationStatuIds = {
                IdentityHelper.TransportationStatus.Processing,
                IdentityHelper.TransportationStatus.RejectDelivery,
                IdentityHelper.TransportationStatus.RejectRecall,
            };

            var booking = _unitOfWork.RepositoryR<Booking>().GetSingle(model.BookingId);
            if (booking == null)
            {
                return ResponseViewModel.CreateError("Không tìm thấy booking");
            }

            if (booking.BookingStatusId != IdentityHelper.BookingStatus.Accepted)
            {
                return ResponseViewModel.CreateError("Trạng thái booking không hợp lệ");
            }

            var transportation = _unitOfWork.RepositoryR<Transportation>().GetSingle(model.Transportation.Id);
            if (transportation == null)
            {
                return ResponseViewModel.CreateError("Không tìm thấy chuyến xe");
            }

            if (!allowTransportationStatuIds.Contains(transportation.TransportationStatusId))
            {
                return ResponseViewModel.CreateError("Trạng thái chuyến xe không hợp lệ");
            }

            var isUserExist = _unitOfWork.RepositoryR<User>().Any(x => x.Id == model.Transportation.UserId && x.IsBlocked != true);
            if (!isUserExist)
            {
                return ResponseViewModel.CreateError("Không tìm thấy nhân viên");
            }

            var vehicle = _unitOfWork.RepositoryR<Vehicle>().GetSingle(model.Transportation.VehicleId.Value);
            if (vehicle == null)
            {
                return ResponseViewModel.CreateError("Không tìm thấy xe");
            }

            if (vehicle.VehicleStatusId != IdentityHelper.VehicleStatus.Free)
            {
                return ResponseViewModel.CreateError("Xe đang được sử dụng");
            }

            // Cập nhật chuyến xe
            transportation.TransportationStatusId = IdentityHelper.TransportationStatus.Processed;
            transportation.UserId = model.Transportation.UserId;
            transportation.VehicleId = model.Transportation.VehicleId;

            // Cập nhật booking
            booking.BookingStatusId = IdentityHelper.BookingStatus.Processed;

            // Cập nhật xe
            vehicle.VehicleStatusId = IdentityHelper.VehicleStatus.Processed;

            _unitOfWork.Commit();

            return ResponseViewModel.CreateSuccess("Điều xe thành công");
        }

        public ResponseViewModel GetBookingByCustomerId(int customerId)
        {
            var booking = _unitOfWork.Repository<Proc_GetBookingByCustomerId>().ExecProcedureSingle(Proc_GetBookingByCustomerId.GetEntityProc(customerId));
            if (booking == null)
            {
                return ResponseViewModel.CreateError("Không tìm thấy booking");
            }

            return ResponseViewModel.CreateSuccess(booking);
        }


        
    }
}
