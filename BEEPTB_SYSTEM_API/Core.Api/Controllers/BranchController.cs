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
    public class BranchController : GeneralController<BranchViewModel, Branch>
    {
        public BranchController(Microsoft.Extensions.Logging.ILogger<dynamic> logger, IOptions<AppSettings> optionsAccessor, IOptions<JwtIssuerOptions> jwtOptions, IUnitOfWork unitOfWork, IGeneralService<BranchViewModel, Branch> iGeneralService) : base(logger, optionsAccessor, jwtOptions, unitOfWork, iGeneralService)
        {
        }    

        [HttpPost("GetListBranch")]
        public JsonResult GetListBranch([FromBody]BranchFilterModel viewModel)
        {
            var data = _unitOfWork.Repository<Proc_GetListBranch>()
                        .ExecProcedure(Proc_GetListBranch.GetEntityProc(viewModel.BranchId ,viewModel.DistrictId, viewModel.ProvinceId, viewModel.WardId,
                        viewModel.SearchText, viewModel.PageNumber, viewModel.PageSize));
            return JsonUtil.Success(data);
        }

        public override JsonResult Get(int id, string cols = null)
        {
            var data = _unitOfWork.Repository<Proc_GetListBranch>()
                        .ExecProcedureSingle(Proc_GetListBranch.GetEntityProc(id, null,null,null,null, 1, 1));
            return JsonUtil.Success(data);
        }
    }
}