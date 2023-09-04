using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Business.Services.Abstract;
using Core.Business.Services.Models;
using Core.Business.ViewModels;
using Core.Business.ViewModels.PriceServices;
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
    public class PriceServiceController : GeneralController<PriceServiceViewModel, PriceServiceInfoViewModel, PriceService>
    {
        protected readonly IPriceServiceService _iPriceServiceService;

        public PriceServiceController(Microsoft.Extensions.Logging.ILogger<dynamic> logger,
            IOptions<AppSettings> optionsAccessor,
            IOptions<JwtIssuerOptions> jwtOptions,
            IUnitOfWork unitOfWork, IGeneralService<PriceServiceViewModel, PriceServiceInfoViewModel, PriceService> iGeneralService,
            IPriceServiceService iPriceServiceService
            ) : base(logger, optionsAccessor, jwtOptions, unitOfWork, iGeneralService)
        {
            _iPriceServiceService = iPriceServiceService;
        }

        public override async Task<JsonResult> Create([FromBody] PriceServiceViewModel viewModel)
        {
            return JsonUtil.Create(_iPriceServiceService.Create(viewModel));
        }

        public override async Task<JsonResult> Update([FromBody] PriceServiceViewModel viewModel)
        {
            return JsonUtil.Create(_iPriceServiceService.Update(viewModel));
        }

        [HttpPost("GetListPriceServices")]
        public JsonResult GetListDistricts([FromBody] PriceServiceFilterViewModel viewModel)
        {
            var data = _unitOfWork.Repository<Proc_GetListPriceServices>().ExecProcedure(Proc_GetListPriceServices.GetEntityProc(viewModel.Code, viewModel.ServiceId, viewModel.VehicleTypeId, viewModel.DateFrom, viewModel.DateTo, viewModel.PageNumber, viewModel.PageSize)).ToList();
            return JsonUtil.Success(data);
        }

        [HttpGet("GetPriceServiceDetail")]
        public JsonResult GetListDistricts(int? priceServiceId)
        {
            var data = _unitOfWork.Repository<Proc_GetListPriceServiceDetails>().ExecProcedureSingle(Proc_GetListPriceServiceDetails.GetEntityProc(priceServiceId, 1, 1));
            return JsonUtil.Success(data);
        }

        [HttpPost("Calculate")]
        public JsonResult Calculate([FromBody] CalculateFilterViewModel model)
        {
            return JsonUtil.Success(_iPriceServiceService.Calculate(model));
        }

        [HttpPost("CalculateAll")]
        public JsonResult CalculateAll([FromBody] CalculateFilterViewModel model)
        {
            return JsonUtil.Success(_iPriceServiceService.CalculateAll(model));
        }
    }
}