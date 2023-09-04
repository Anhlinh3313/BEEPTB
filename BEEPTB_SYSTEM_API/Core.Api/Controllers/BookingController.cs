using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Core.Business.Services.Abstract;
using Core.Business.Services.Models;
using Core.Business.ViewModels.Accounts;
using Core.Business.ViewModels.Bookings;
using Core.Business.ViewModels.Departments;
using Core.Business.ViewModels.PriceServices;
using Core.Data.Abstract;
using Core.Entity.Entities;
using Core.Entity.Procedures;
using Core.Infrastructure.Helper;
using Core.Infrastructure.Utils;
using LinqKit;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

namespace Core.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookingController : GeneralController<BookingViewModel, Booking>
    {
        protected readonly IBookingService _iBookingService;

        public BookingController(Microsoft.Extensions.Logging.ILogger<dynamic> logger,
            IOptions<AppSettings> optionsAccessor,
            IOptions<JwtIssuerOptions> jwtOptions,
            IUnitOfWork unitOfWork,
            IGeneralService<BookingViewModel, Booking> iGeneralService,
            IBookingService iBookingService
            ) : base(logger, optionsAccessor, jwtOptions, unitOfWork, iGeneralService)
        {
            _iBookingService = iBookingService;
        }

        public override async Task<JsonResult> Create([FromBody] BookingViewModel viewModel)
        {
            var currentCustomer = GetCurrentCustomer();
            if (currentCustomer != null)
            {
                viewModel.CustomerId = currentCustomer.Id;
            }

            return JsonUtil.Create(_iBookingService.Create(viewModel));
        }

        [HttpPost("GetListBookings")]
        public JsonResult GetListBookings([FromBody] BookingFilterViewModel viewModel)
        {
            return JsonUtil.Success(_iBookingService.GetListBookings(viewModel));
        }

        [HttpGet("GetBookingDetail")]
        public JsonResult GetBookingDetail(int bookingId)
        {
            return JsonUtil.Create(_iBookingService.GetBookingDetail(bookingId));
        }

        [HttpPost("GetListCoordinate")]
        public JsonResult GetListCoordinate([FromBody] BookingFilterViewModel viewModel)
        {
            return JsonUtil.Success(_iBookingService.GetListCoordinate(viewModel));
        }

        [HttpGet("GetCoordinateDetail")]
        public JsonResult GetCoordinateDetail(int bookingId)
        {
            return JsonUtil.Create(_iBookingService.GetCoordinateDetail(bookingId));
        }


        [HttpPost("GetListBookingsByCurrentCustomer")]
        public JsonResult GetListBookingsByCurrentCustomer([FromBody] BookingFilterViewModel viewModel)
        {
            var currentCustomer = GetCurrentCustomer();
            if (currentCustomer == null)
            {
                return JsonUtil.Error("Không tìm thấy customer");
            }

            return JsonUtil.Success(_iBookingService.GetListBookingsByCurrentCustomer(viewModel, currentCustomer.Id));
        }

        [HttpPost("GetCurrentBookingByCurrentCustomer")]
        public JsonResult GetCurrentBookingByCurrentCustomer()
        {
            var currentCustomer = GetCurrentCustomer();
            if (currentCustomer == null)
            {
                return JsonUtil.Error("Không tìm thấy customer");
            }

            return JsonUtil.Success(_iBookingService.GetCurrentBookingByCurrentCustomer(currentCustomer.Id));
        }

        [HttpPost("Accept")]
        public JsonResult Accept([FromBody] BookingUpdateStatusModel viewModel)
        {
            return JsonUtil.Create(_iBookingService.Accept(viewModel));
        }

        [HttpPost("Reject")]
        public JsonResult Reject([FromBody] BookingUpdateStatusModel viewModel)
        {
            return JsonUtil.Create(_iBookingService.Reject(viewModel));
        }

        [HttpPost("Cancel")]
        public JsonResult Cancel([FromBody] BookingUpdateStatusModel viewModel)
        {
            return JsonUtil.Create(_iBookingService.Cancel(viewModel));
        }

        [HttpPost("CustomerCancel")]
        public JsonResult CustomerCancel([FromBody] BookingUpdateStatusModel viewModel)
        {
            var currentCustomer = GetCurrentCustomer();
            if (currentCustomer == null)
            {
                return JsonUtil.Error("Không tìm thấy customer");
            }

            return JsonUtil.Create(_iBookingService.CustomerCancel(viewModel, currentCustomer.Id));
        }

        [HttpPost("CoordinateVehicle")]
        public JsonResult CoordinateVehicle([FromBody] CoordinateVehicleViewModel viewModel)
        {
            return JsonUtil.Create(_iBookingService.CoordinateVehicle(viewModel));
        }

        [HttpGet("GetBookingByCustomerId")]
        public JsonResult GetBookingByCustomerId(int customerId)
        {
            return JsonUtil.Create(_iBookingService.GetBookingByCustomerId(customerId));
        }
    }
}