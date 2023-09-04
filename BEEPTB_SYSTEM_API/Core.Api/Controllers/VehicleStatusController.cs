using Core.Data.Abstract;
using Core.Entity.Entities;
using Core.Infrastructure.Helper;
using Core.Infrastructure.Utils;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

namespace Core.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VehicleStatusController
    {
        protected readonly IUnitOfWork _unitOfWork;
        public VehicleStatusController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        [HttpGet("GetAll")]
        public JsonResult GetAll()
        {
            var vehicleStatuses = _unitOfWork.RepositoryR<VehicleStatus>().GetAll();

            return JsonUtil.Success(vehicleStatuses);
        }
    }
}