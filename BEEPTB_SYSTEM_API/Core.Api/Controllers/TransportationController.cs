using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Core.Business.Services.Abstract;
using Core.Business.Services.Models;
using Core.Business.ViewModels.Transportations;
using Core.Business.ViewModels.TransportationIncurredFees;
using Core.Data.Abstract;
using Core.Entity.Entities;
using Core.Entity.Procedures;
using Core.Infrastructure.Helper;
using Core.Infrastructure.Utils;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

namespace Core.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TransportationController : GeneralController<TransportationViewModel, Transportation>
    {
        private readonly ITransportationIncurredFeesService _iTransportationIncurredFeesService;
        private readonly IGetTransportationService _iGetTransportationService;
        public TransportationController(
            Microsoft.Extensions.Logging.ILogger<dynamic> logger,
            IOptions<AppSettings> optionsAccessor,
            IOptions<JwtIssuerOptions> jwtOptions,
            IUnitOfWork unitOfWork,
            ITransportationIncurredFeesService iTransportationIncurredFeesService,
            IGetTransportationService iGetTransportationService,
            IGeneralService<TransportationViewModel, Transportation> iGeneralService) : base(logger, optionsAccessor, jwtOptions, unitOfWork, iGeneralService)
        {
            _iTransportationIncurredFeesService = iTransportationIncurredFeesService;
            _iGetTransportationService = iGetTransportationService;
        }

        [HttpPost("GetListTransportations")]
        public JsonResult GetListTransportations([FromBody] TransportationFilterViewModel viewModel)
        {
            var data = _unitOfWork.Repository<Proc_GetListTransportations>()
                .ExecProcedure(Proc_GetListTransportations.GetEntityProc(viewModel.Id, viewModel.BookingId, viewModel.Code, viewModel.VehicleTypeId, viewModel.VehicleId,
                viewModel.BranchId, viewModel.ServiceId, viewModel.TransportationStatusId, viewModel.PageNumber, viewModel.PageSize, viewModel.SearchText));
            return JsonUtil.Success(data);
        }

        #region App
        [HttpPost("GetListCurrentTransportationApp")]
        public JsonResult GetListCurrentTransportationApp([FromBody] CurrentTransportationAppFilterViewModel filterViewModel)
        {
            filterViewModel.UserId = 8;

            return JsonUtil.Create(_iGetTransportationService.GetListCurrentTransportationApp(filterViewModel));
        }
        [HttpPost("GetCurrentTransportationDetailApp")]
        public JsonResult GetCurrentTransportationDetailApp([FromBody] CurrentTransportationAppFilterViewModel filterViewModel)
        {
            filterViewModel.UserId = 8;
            if (!filterViewModel.TransportationId.HasValue)
            {
                return JsonUtil.Error("Chuyến xe đang để trống...");
            }
            return JsonUtil.Create(_iGetTransportationService.GetCurrentTransportationDetailApp(filterViewModel));
        }
        #endregion

        [HttpGet("GetListIncurredFeesByTransportationId")]
        public JsonResult GetListIncurredFeesByTransportationId(int? transportationId, string listTransportationIds)
        {
            var data = _unitOfWork.Repository<Proc_GetListIncurredFeesByTransportationId>()
                .ExecProcedure(Proc_GetListIncurredFeesByTransportationId.GetEntityProc(transportationId, listTransportationIds));
            return JsonUtil.Success(data);
        }

        [HttpGet("GetListPaymentHistoryByTransportationId")]
        public JsonResult GetListPaymentHistoryByTransportationId(int transportationId)
        {
            var data = _unitOfWork.RepositoryR<HistoryPayment>().FindBy(x => x.TransportationId == transportationId && x.IsEnabled).OrderByDescending(x => x.CreatedWhen);
            return JsonUtil.Success(data);
        }

        [HttpGet("GetAllTransportationStatus")]
        public JsonResult GetAllTransportationStatus()
        {
            var data = _unitOfWork.RepositoryR<TransportationStatus>().GetAll();
            return JsonUtil.Success(data);
        }

        #region TransportationId
        [HttpGet("GetCurrentTransportation")]
        public JsonResult GetCurrentTransportation()
        {
            return JsonUtil.Create(_iGetTransportationService.GetCurrentTransportation(GetCurrentUserId()));
        }
        #endregion

             #region Transportation Incurred Fees
        [HttpPost("CreateTransportationIncurredFees")]
        public JsonResult CreateTransportationIncurredFees([FromBody]TransportationIncurredFeesViewModel viewModel)
        {
            return JsonUtil.Create(_iTransportationIncurredFeesService.Create(viewModel));
        }

        [HttpGet("CreateImagePathIncurredFees")]
        public JsonResult CreateImagePathIncurredFees(string imagePath, int transportationIncurredId)
        {
            var transportation = _unitOfWork.RepositoryR<Transportation>().GetSingle(transportationIncurredId);
            if (transportation == null) return JsonUtil.Error("Chuyến xe không tồn tại");
            else
            {
                var dataIncurredFeeImage = new IncurredFeeImages
                {
                    ImagePath = imagePath
                };
                _unitOfWork.RepositoryCRUD<IncurredFeeImages>().Insert(dataIncurredFeeImage);
                _unitOfWork.Commit();

                var dataTransportationIncurredFeesImages = new TransportationIncurredFeesImages
                {
                    IncurredFeesImageId = dataIncurredFeeImage.Id,
                    TransportationIncurredFeeId = transportationIncurredId
                };
                _unitOfWork.RepositoryCRUD<TransportationIncurredFeesImages>().Insert(dataTransportationIncurredFeesImages);
                _unitOfWork.Commit();
                return JsonUtil.Success(transportation);
            }
        }

        [HttpPost("UpdateTransportationIncurredFees")]
        public JsonResult UpdateTransportationIncurredFees([FromBody]TransportationIncurredFeesViewModel viewModel)
        {
            return JsonUtil.Create(_iTransportationIncurredFeesService.Update(viewModel));
        }
        [HttpPost("DeleteTransportationIncurredFees")]
        public JsonResult DeleteTransportationIncurredFees([FromBody]TransportationIncurredFeesViewModel viewModel)
        {
            return JsonUtil.Create(_iTransportationIncurredFeesService.Delete(viewModel.Id));
        }

        [HttpGet("GetAllTransportationIncurredFees")]
        public JsonResult GetAllTransportationIncurredFees()
        {
            var data = _unitOfWork.RepositoryR<TransportationIncurredFees>().GetAll();
            return JsonUtil.Success(data);
        }
        [HttpPost("GetListTransportationIncurredFees")]
        public JsonResult GetListTransportationIncurredFees([FromBody]TransportationIncurredFeeFilterViewModel viewModel)
        {
            if (!viewModel.TransportationId.HasValue)
            {
                return JsonUtil.Error("Chuyến xe không được để trống!");
            }
            var data = _unitOfWork.Repository<Proc_GetListTransportationIncurredFees>()
                .ExecProcedure(Proc_GetListTransportationIncurredFees.GetEntityProc(
                    viewModel.TransportationId.Value,
                    viewModel.IncurredFeeId,
                    viewModel.PageNumber,
                    viewModel.PageSize
                ));
            return JsonUtil.Success(data);
        }
        #endregion Transportation Incurred Fees
        [HttpPost("GetTransportationHistoryBySupplierUserId")]
        public JsonResult GetTransportationHistoryBySupplierUserId([FromBody] TransportationFilterViewModel viewModel)
        {
            var data = _unitOfWork.Repository<Proc_GetTransportationHistoryBySupplierUserId>()
                .ExecProcedure(Proc_GetTransportationHistoryBySupplierUserId.GetEntityProc(viewModel.Id, viewModel.UserId, viewModel.TransportationStatusIds, viewModel.PageNumber, viewModel.PageSize));
            return JsonUtil.Success(data);
        }
    }
}