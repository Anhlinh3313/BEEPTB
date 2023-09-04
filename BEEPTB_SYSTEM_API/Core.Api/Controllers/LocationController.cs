using Core.Business.Core.Helpers;
using Core.Business.Services.Abstract;
using Core.Business.ViewModels.Locations;
using Core.Data.Abstract;
using Core.Entity.Entities;
using Core.Infrastructure.Helper;
using Core.Infrastructure.Utils;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using System.Linq;

namespace Core.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LocationController
    {
        protected readonly ILocationService _iLocationService;
        public LocationController(
            ILocationService iLocationService
        )
        {
            _iLocationService = iLocationService;
        }

        [AllowAnonymous]
        [HttpGet("GetInfoLocation")]
        public JsonResult GetInfoLocation(string provinceName = null, string districtName = null, string wardName = null)
        {
            return JsonUtil.Create(_iLocationService.GetInfoLocation(provinceName, districtName, wardName));
        }
    }
}