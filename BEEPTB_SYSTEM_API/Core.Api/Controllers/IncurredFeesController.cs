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

namespace Core.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class IncurredFeesController : GeneralController<IncurredFeesViewModel, IncurredFee>
    {
        public IncurredFeesController(Microsoft.Extensions.Logging.ILogger<dynamic> logger, IOptions<AppSettings> optionsAccessor, IOptions<JwtIssuerOptions> jwtOptions, IUnitOfWork unitOfWork, IGeneralService<IncurredFeesViewModel, IncurredFee> iGeneralService) : base(logger, optionsAccessor, jwtOptions, unitOfWork, iGeneralService)
        {
        }

        [HttpGet("GetListIncurredFees")]
        public JsonResult GetListIncurredFees(string searchText, int? pageNumber, int? pageSize)
        {
            var data = _unitOfWork.Repository<Proc_GetListIncurredFees>()
                        .ExecProcedure(Proc_GetListIncurredFees.GetEntityProc(searchText, pageNumber, pageSize));
            return JsonUtil.Success(data);
        }
    }
}