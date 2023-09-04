using Core.Business.Services.Abstract;
using Core.Business.Services.Models;
using Core.Business.ViewModels.Supports;
using Core.Data.Abstract;
using Core.Entity.Entities;
using Core.Entity.Procedures;
using Core.Infrastructure.Helper;
using Core.Infrastructure.Utils;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using System.Threading.Tasks;

namespace Core.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SupportController : GeneralController<SupportsViewModel, Support>
    {
        private readonly ISupportService _iSupportService;
        public SupportController(Microsoft.Extensions.Logging.ILogger<dynamic> logger,
            IOptions<AppSettings> optionsAccessor,
            IOptions<JwtIssuerOptions> jwtOptions,
            IUnitOfWork unitOfWork,
            IGeneralService<SupportsViewModel, Support> iGeneralService,
            ISupportService iSupportService
        ) : base(logger, optionsAccessor, jwtOptions, unitOfWork, iGeneralService)
        {
            _iSupportService = iSupportService;
        }

        [HttpPost("CreateSupport")]
        public async Task<JsonResult> CreateSupport([FromBody] SupportsViewModel viewModel)
        {
            var dataCustomer = GetCurrentCustomer();
            if(dataCustomer == null)
            {
                return JsonUtil.Error("Không tìm thấy khách hàng");
            }
            viewModel.CustomerId = dataCustomer.Id;
            return JsonUtil.Create(_iSupportService.CreateSupport(viewModel));
        }

        [HttpPost("GetlistSupports")]
        public JsonResult GetlistSupport([FromBody] SupportFilterViewModel model)
        {
            var result = _unitOfWork.Repository<Proc_GetListSupport>().
                ExecProcedure(Proc_GetListSupport.GetEntityProcView(GetCurrentUserId(), model.Code, model.SupplierId, model.CustomerId, model.EmployeeId, model.SupportStatusId, model.SupportTypeId, model.PageNum, model.PageSize));
            return JsonUtil.Success(result);
        }

        [HttpPost("UpdateStatusForWard")]
        public Task<JsonResult> UpdateStatusForWard([FromBody] SupportsViewModel model)
        {
            model.SupportStatusId = SupportsStatusHelper.FORWARD;
            var result = this.Update(model);
            return result;
        }

        [HttpPost("UpdateStatusProcessing")]
        public Task<JsonResult> UpdateStatusProcessing([FromBody] SupportsViewModel model)
        {
            model.SupportStatusId = SupportsStatusHelper.PROCESSING;
            model.EmployeeId = GetCurrentUserId();
            var result = this.Update(model);
            return result;
        }

        [HttpPost("UpdateStatusDone")]
        public Task<JsonResult> UpdateStatusDone([FromBody] SupportsViewModel model)
        {
            model.SupportStatusId = SupportsStatusHelper.DONE;
            var result = this.Update(model);
            return result;
        }

    }
}