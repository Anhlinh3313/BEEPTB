using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Core.Business.Services.Abstract;
using Core.Business.Services.Models;
using Core.Business.ViewModels.General;
using Core.Data.Abstract;
using Core.Entity.Entities;
using Core.Infrastructure.Helper;
using Core.Infrastructure.Utils;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.AspNetCore.Authorization;
using Core.Business.ViewModels;
using Core.Entity.Procedures;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Core.Api.Controllers
{
    [Route("api/[controller]")]
    public class ProvinceController : GeneralController<ProvinceViewModel, ProvinceInfoViewModel, Province>
    {
        public ProvinceController(Microsoft.Extensions.Logging.ILogger<dynamic> logger, IOptions<AppSettings> optionsAccessor, IOptions<JwtIssuerOptions> jwtOptions, IUnitOfWork unitOfWork, IGeneralService<ProvinceViewModel, ProvinceInfoViewModel, Province> iGeneralService) : base(logger, optionsAccessor, jwtOptions, unitOfWork, iGeneralService)
        {
        }

        [AllowAnonymous]
        [HttpGet("GetProvinceInVietNam")]
        public JsonResult GetProvinceInVietNam()
        {
            return JsonUtil.Create(_iGeneralService.FindBy(x => x.CountryId == 1));
        }

        [HttpGet("GetProvinceByCountryId")]
        public JsonResult GetProvinceByCountryId(int countryId)
        {
            return JsonUtil.Create(_iGeneralService.FindBy(x => x.CountryId == countryId));
        }

        [HttpGet("GetProvinceByCode")]
        public JsonResult GetProvinceByCountryId(string code)
        {
            return JsonUtil.Create(_iGeneralService.FindBy(x => x.Code == code));
        }

        [AllowAnonymous]
        [HttpGet("GetProvinceByName")]
        public JsonResult GetProvinceByName(string name, int? countryId = 1)
        {
            countryId = (countryId ?? 1);
            var reponsive = _unitOfWork.RepositoryCRUD<Province>();
            var provinces = reponsive.FindBy(o => o.CountryId == countryId);
            var resultId = Business.Core.Helpers.StringHelper.GetBestMatches(provinces, "Id", "Name", name, null,
                                                                Business.Core.Helpers.StringHelper._REPLACES_LOCATION_NAME);
            return JsonUtil.Create(_iGeneralService.Get((int)resultId));
        }

        [HttpPost("GetByListCode")]
        public JsonResult GetByListCode([FromBody] List<string> list)
        {
            return JsonUtil.Success(_iGeneralService.FindBy(f => list.Contains(f.Code) && f.IsEnabled));
        }

        [HttpPost("GetListProvinces")]
        public JsonResult GetListProvinces([FromBody] FilterViewModel viewModel)
        {
            var data = _unitOfWork.Repository<Proc_GetListProvinces>().ExecProcedure(Proc_GetListProvinces.GetEntityProc(viewModel.SearchText, viewModel.PageNumber, viewModel.PageSize)).ToList();
            return JsonUtil.Success(data);
        }
    }
}
