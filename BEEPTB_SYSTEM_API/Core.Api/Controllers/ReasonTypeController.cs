using Core.Business.Services.Models;
using Core.Data.Abstract;
using Core.Entity.Entities;
using Core.Infrastructure.Helper;
using Core.Infrastructure.Utils;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace Core.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReasonTypeController : BaseController
    {
        public ReasonTypeController(
            ILogger<dynamic> logger,
            IOptions<AppSettings> optionsAccessor,
            IOptions<JwtIssuerOptions> jwtOptions,
            IUnitOfWork unitOfWork) : base(logger, unitOfWork)
        {
        }

        [HttpGet("GetAllReasonType")]
        public JsonResult GetAllReasonType()
        {
            var result = _unitOfWork.RepositoryR<ReasonType>().GetAll();
            return JsonUtil.Success(result);
        }
    }
}