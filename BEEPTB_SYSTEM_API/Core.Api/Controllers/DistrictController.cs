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
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Microsoft.AspNetCore.Authorization;
using Core.Infrastructure.Utils;
using Core.Entity.Procedures;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Core.Api.Controllers
{
    [Route("api/[controller]")]
    public class DistrictController : GeneralController<DistrictViewModel, DistrictInfoViewModel, District>
    {
        public DistrictController(Microsoft.Extensions.Logging.ILogger<dynamic> logger, IOptions<AppSettings> optionsAccessor, IOptions<JwtIssuerOptions> jwtOptions, IUnitOfWork unitOfWork, IGeneralService<DistrictViewModel, DistrictInfoViewModel, District> iGeneralService) : base(logger, optionsAccessor, jwtOptions, unitOfWork, iGeneralService)
        {
        }

        [AllowAnonymous]
        [HttpGet("GetDistrictByProvinceId")]
        public JsonResult GetDistrictByProvinceId(int provinceId)
        {
            return base.FindBy(x => x.ProvinceId == provinceId);
        }

        [HttpPost("GetDistrictByProvinceIds")]
        public JsonResult GetDistrictByProvinceIds([FromBody] IdViewModel model)
        {
            return base.FindBy(x => model.Ids.Contains(x.ProvinceId), cols: model.Cols);
        }

        [AllowAnonymous]
        [HttpGet("GetDistrictByName")]
        public JsonResult GetDistrictByName(string name, int provinceId)
        {
            var reponsive = _unitOfWork.RepositoryCRUD<District>();
            var provinces = reponsive.FindBy(o => o.ProvinceId == provinceId);
            var resultId = Business.Core.Helpers.StringHelper.GetBestMatches(provinces, "Id", "Name", name, null,
                                                                Business.Core.Helpers.StringHelper._REPLACES_LOCATION_NAME);
            return JsonUtil.Create(_iGeneralService.Get((int)resultId));
        }

        [HttpPost("GetListDistricts")]
        public JsonResult GetListDistricts([FromBody] DistrictFilterModel viewModel)
        {
            var data = _unitOfWork.Repository<Proc_GetListDistricts>().ExecProcedure(Proc_GetListDistricts.GetEntityProc(viewModel.Id, viewModel.ProvinceId, viewModel.SearchText, viewModel.PageNumber, viewModel.PageSize)).ToList();
            return JsonUtil.Success(data);
        }
    }
}
