using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Core.Business.Services.Abstract;
using Core.Business.Services.Models;
using Core.Business.ViewModels.Accounts;
using Core.Business.ViewModels.Departments;
using Core.Data.Abstract;
using Core.Entity.Entities;
using Core.Entity.Procedures;
using Core.Infrastructure.Helper;
using Core.Infrastructure.Utils;
using LinqKit;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

namespace Core.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DepartmentController : GeneralController<DepartmentViewModel, Department>
    {
        public DepartmentController(Microsoft.Extensions.Logging.ILogger<dynamic> logger, IOptions<AppSettings> optionsAccessor, IOptions<JwtIssuerOptions> jwtOptions, IUnitOfWork unitOfWork, IGeneralService<DepartmentViewModel, Department> iGeneralService) : base(logger, optionsAccessor, jwtOptions, unitOfWork, iGeneralService)
        {
        }
        [HttpPost("GetListDepartment")]
        public JsonResult GetListDepartment([FromBody]SearchViewModel model)
        {
            var ressult = _unitOfWork.Repository<Proc_GetListDepartment>().
                 ExecProcedure(Proc_GetListDepartment.GetEntityProc(model.SearchText, model.PageNumber, model.PageSize));
            return JsonUtil.Success(ressult);
        }
    }
}