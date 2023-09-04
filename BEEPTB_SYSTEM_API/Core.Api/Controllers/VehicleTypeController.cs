using Microsoft.AspNetCore.Mvc;
using Core.Entity.Entities;
using Core.Business.ViewModels;
using Core.Business.Services.Abstract;
using Core.Business.Services.Models;
using Core.Data.Abstract;
using Core.Infrastructure.Helper;
using Microsoft.Extensions.Options;
using Core.Infrastructure.Utils;
using Core.Entity.Procedures;
using Core.Business.ViewModels.VehicleTypes;
using Microsoft.AspNetCore.Authorization;

namespace Core.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VehicleTypeController : GeneralController<VehicleTypeViewModel, VehicleType>
    {
        public VehicleTypeController(Microsoft.Extensions.Logging.ILogger<dynamic> logger, IOptions<AppSettings> optionsAccessor, IOptions<JwtIssuerOptions> jwtOptions, IUnitOfWork unitOfWork, IGeneralService<VehicleTypeViewModel, VehicleType> iGeneralService) : base(logger, optionsAccessor, jwtOptions, unitOfWork, iGeneralService)
        {
        }

        [AllowAnonymous]
        public override JsonResult GetAll(int? pageSize = null, int? pageNumber = null, string cols = null)
        {
            return base.GetAll(pageSize, pageNumber, cols);
        }

        [HttpGet("GetListTypeVehicle")]
        public JsonResult GetListTypeVehicle(string searchText, string ids, int? pageNumber, int? pageSize)
        {
            var data = _unitOfWork.Repository<Proc_GetListTypeVehicle>()
                        .ExecProcedure(Proc_GetListTypeVehicle.GetEntityProc(searchText, ids, pageNumber, pageSize));
            return JsonUtil.Success(data);
        }
    }
}