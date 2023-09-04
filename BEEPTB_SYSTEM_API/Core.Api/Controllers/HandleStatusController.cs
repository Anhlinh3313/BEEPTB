using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Business.Services.Abstract;
using Core.Business.Services.Models;
using Core.Business.ViewModels.HandleStatuss;
using Core.Data.Abstract;
using Core.Entity.Entities;
using Core.Infrastructure.Helper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

namespace Core.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HandleStatusController : GeneralController<HandleStatusViewModel, SupportStatus>
    {
        public HandleStatusController(Microsoft.Extensions.Logging.ILogger<dynamic> logger, IOptions<AppSettings> optionsAccessor, IOptions<JwtIssuerOptions> jwtOptions, IUnitOfWork unitOfWork, IGeneralService<HandleStatusViewModel, SupportStatus> iGeneralService) : base(logger, optionsAccessor, jwtOptions, unitOfWork, iGeneralService)
        {
        }
    }
}