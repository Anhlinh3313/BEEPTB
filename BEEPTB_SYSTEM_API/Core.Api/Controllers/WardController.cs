using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Business.Services.Abstract;
using Core.Business.Services.Models;
using Core.Business.ViewModels;
using Core.Business.ViewModels.General;
using Core.Data.Abstract;
using Core.Entity.Entities;
using Core.Infrastructure.Helper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.AspNetCore.Authorization;
using Core.Infrastructure.Utils;
using Core.Entity.Procedures;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Core.Api.Controllers
{
    [Route("api/[controller]")]
    public class WardController : GeneralController<WardViewModel, WardInfoViewModel, Ward>
    {
        public WardController(Microsoft.Extensions.Logging.ILogger<dynamic> logger, IOptions<AppSettings> optionsAccessor, IOptions<JwtIssuerOptions> jwtOptions, IUnitOfWork unitOfWork, IGeneralService<WardViewModel, WardInfoViewModel, Ward> iGeneralService) : base(logger, optionsAccessor, jwtOptions, unitOfWork, iGeneralService)
        {
        }

        [AllowAnonymous]
        [HttpGet("GetWardByDistrictId")]
        public JsonResult GetWardByDistrictId(int? districtId = null, int? provinceId = null)
        {
            var listDistrictIds = _unitOfWork.RepositoryR<District>().FindBy(f => (districtId == null || f.Id == districtId) && (provinceId == null || f.ProvinceId == provinceId)).Select(s => s.Id).ToList();
            return base.FindBy(x => listDistrictIds.Contains(x.DistrictId));
        }

        [HttpPost("GetWardByDistrictIds")]
        public JsonResult GetWardByDistrictIds([FromBody] GetWardByDistrictIdsViewModel model)
        {
            //if(model.IsHideExistWard)
            //{
            //    var hubRoutingWardIds = _unitOfWork.RepositoryR<HubRoutingWard>().GetAll().Select(x => x.WardId).ToList();
            //    return base.FindBy(x => model.Ids.Contains(x.DistrictId) && !hubRoutingWardIds.Contains(x.Id), cols: model.Cols);
            //}
            //else
            return base.FindBy(x => model.Ids.Contains(x.DistrictId), cols: model.Cols);
        }

        [AllowAnonymous]
        [HttpGet("GetWardByName")]
        public JsonResult GetWardByName(string name, int districtId)
        {
            var reponsive = _unitOfWork.RepositoryCRUD<Ward>();
            var provinces = reponsive.FindBy(o => o.DistrictId == districtId);
            var resultId = Business.Core.Helpers.StringHelper.GetBestMatches(provinces, "Id", "Name", name, null,
                                                                Business.Core.Helpers.StringHelper._REPLACES_LOCATION_NAME);
            return JsonUtil.Create(_iGeneralService.Get((int)resultId));
        }

        [HttpPost("GetListWards")]
        public JsonResult GetListWards([FromBody] WardModel viewModel)
        {
            var data = _unitOfWork.Repository<Proc_GetListWards>().ExecProcedure(Proc_GetListWards.GetEntityProc(viewModel.DistrictId, viewModel.ProvinceId, viewModel.SearchText, viewModel.PageNumber, viewModel.PageSize)).ToList();
            return JsonUtil.Success(data);
        }
    }
}
