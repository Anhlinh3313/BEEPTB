using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Business.Services.Abstract;
using Core.Business.Services.Models;
using Core.Business.ViewModels.Vehicles;
using Core.Data.Abstract;
using Core.Entity.Entities;
using Core.Entity.Procedures;
using Core.Infrastructure.Helper;
using Core.Infrastructure.Utils;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

namespace Core.Api.Controllers
{
    [Route("api/[controller]")]
    public class VehicleController : GeneralController<VehiclesViewModel, Vehicle>
    {
        protected readonly IVehicleService _iVehicleService;

        public VehicleController(Microsoft.Extensions.Logging.ILogger<dynamic> logger,
            IOptions<AppSettings> optionsAccessor,
            IOptions<JwtIssuerOptions> jwtOptions,
            IUnitOfWork unitOfWork, IGeneralService<VehiclesViewModel, Vehicle> iGeneralService,
            IVehicleService iVehicleService
            ) : base(logger, optionsAccessor, jwtOptions, unitOfWork, iGeneralService)
        {
            _iVehicleService = iVehicleService;
        }

        [HttpPost("Create")]
        public override async Task<JsonResult> Create([FromBody] VehiclesViewModel viewModel)
        {
            if (!ModelState.IsValid)
            {
                return JsonUtil.Error(ModelState);
            }
            viewModel.BranchId = GetCurrentUser().BranchId;
            var vehicle = await _iGeneralService.Create(viewModel);

            string vh = $"X{RandomUtil.GetCodeNumber(vehicle.Data.Id, 7)}";
            vehicle.Data.Code = vh;
            vehicle.Data.Name = vh;

            _unitOfWork.RepositoryCRUD<Vehicle>().Update(vehicle.Data);
            _unitOfWork.Commit();
            return JsonUtil.Success(vehicle.Data);
        }

        [HttpPost("GetListVehicles")]
        public JsonResult GetListVehicles([FromBody] VehicleFilterViewModel model)
        {
            var data = _unitOfWork.Repository<Proc_GetListVehicles>().
                ExecProcedure(Proc_GetListVehicles.GetEntityProc(model.VehicleTypeId, model.VehicleStatusId, model.SearchText, model.PageNumber, model.PageSize, model.BranchId));
            return JsonUtil.Success(data);
        }

        [HttpGet("VehicleSuggestion")]
        public JsonResult VehicleSuggestion(int transportationId)
        {
            var branchId = GetCurrentUser().BranchId;
            return JsonUtil.Create(_iVehicleService.VehicleSuggestion(transportationId, branchId));
        }
    }
}