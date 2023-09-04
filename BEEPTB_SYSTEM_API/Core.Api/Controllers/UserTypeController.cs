using Core.Data.Abstract;
using Core.Entity.Entities;
using Core.Infrastructure.Helper;
using Core.Infrastructure.Utils;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Core.Api.Controllers
{
    [Route("api/[controller]")]
    public class UserTypeController
    {
        protected readonly IUnitOfWork _unitOfWork;
        public UserTypeController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        [HttpGet("GetAll")]
        public JsonResult GetAll()
        {
            var modulePages = _unitOfWork.RepositoryR<UserType>().GetAll();

            return JsonUtil.Success(modulePages);
        }
    }
}
