using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Core.Entity.Entities;
using Core.Business.ViewModels;
using Core.Business.Services.Abstract;
using Core.Business.Services.Models;
using Core.Data.Abstract;
using Core.Infrastructure.Helper;
using Microsoft.Extensions.Options;
using Core.Entity.Procedures;
using Core.Infrastructure.Utils;

namespace Core.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PriceFormulaController
    {
        protected readonly IUnitOfWork _unitOfWork;
        public PriceFormulaController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        [HttpGet("GetAll")]
        public JsonResult GetAll()
        {
            var priceFormulas = _unitOfWork.RepositoryR<PriceFormula>().GetAll();

            return JsonUtil.Success(priceFormulas);
        }
    }
}