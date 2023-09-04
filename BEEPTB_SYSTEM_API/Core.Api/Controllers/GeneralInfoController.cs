using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Data.Abstract;
using Core.Entity.Entities;
using Core.Infrastructure.Utils;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Core.Api.Controllers
{
    [Route("api/[controller]")]
    public class GeneralInfoController : BaseController
    {
        public GeneralInfoController(Microsoft.Extensions.Logging.ILogger<dynamic> logger, IUnitOfWork unitOfWork) : base(logger, unitOfWork)
        {
        }

        [HttpGet("Get")]
        public JsonResult Get()
        {
            return JsonUtil.Success(_unitOfWork.RepositoryR<GeneralInfo>().GetAll().FirstOrDefault());
        }
    }
}
