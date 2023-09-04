using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Core.Business.Services.Abstract;
using Core.Business.Services.Models;
using Core.Business.ViewModels;
using Core.Data.Abstract;
using Core.Entity.Entities;
using Core.Infrastructure.Helper;
using Core.Infrastructure.Utils;
using Core.Infrastructure.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.DotNet.PlatformAbstractions;
using Microsoft.Extensions.Options;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Core.Api.Controllers
{
    [Route("api/[controller]")]
    public class UploadController : BaseController
    {
        protected readonly IUploadService _iUploadService;
        public UploadController(Microsoft.Extensions.Logging.ILogger<dynamic> logger, IOptions<AppSettings> optionsAccessor, IOptions<JwtIssuerOptions> jwtOptions, IUnitOfWork unitOfWork, IUploadService iUploadService) : base(logger, optionsAccessor, jwtOptions, unitOfWork)
        {
            _iUploadService = iUploadService;
        }

        [HttpPost("UploadAvatarAccount")]
        public async Task<JsonResult> UploadAvatarAccount([FromBody] UploadFileViewModel viewModel)
        {
            var user = _unitOfWork.RepositoryR<User>().GetSingle(viewModel.Id);
            var fileInfo = new FileViewModel();
            fileInfo.FileName = viewModel.FileName;
            fileInfo.FileExtension = viewModel.FileExtension;
            fileInfo.FileBase64String = viewModel.FileBase64String;

            if (user == null) return JsonUtil.Error("Tài khoản không tồn tại");
            if (!FileUtil.IsBase64(fileInfo.FileBase64String)) return JsonUtil.Error("File upload không hợp lệ");
            user.AvatarPath = FileUtil.SaveFile($"Uploads/Accounts/Avatar/{viewModel.Id}", fileInfo);
            _unitOfWork.RepositoryCRUD<User>().Update(user);
            await _unitOfWork.CommitAsync();
            return JsonUtil.Success();
        }

        [HttpPost("UploadImages")]
        public JsonResult UploadImageToSave(List<IFormFile> files, int userId)
        {
            List<string> result = new List<string>();
            foreach (var item in files)
            {
                var imagePath = _iUploadService.UploadImageToSave(item, userId);
                if (imagePath.Data != null)
                {
                    result.Add(imagePath.Data);
                }
            }
            var data = ResponseViewModel.CreateSuccess(result.ToArray());
            return JsonUtil.Create(data);
        }

        [HttpPost("UploadAvatarToSave")]
        public JsonResult UploadFileExcelToSave(IFormFile file, int userId)
        {
            return JsonUtil.Create(_iUploadService.UploadAvatarToSave(file, userId));
        }


        [HttpPost("UploadIncurredImages")]
        public async Task<JsonResult> UploadIncurredImages(IFormFile file)
        {
            return JsonUtil.Create(await _iUploadService.UploadIncurredImages(file));
        }

        [HttpGet("GetImageByPath")]
        public JsonResult GetImageByPath(string imagePath)
        {
            return JsonUtil.Success(FileUtil.GetFile(imagePath));
        }

        [HttpPost("UploadIdentityImagePath")]
        public JsonResult UploadIdentityImagePath(IFormFile IdentityImage1Path, IFormFile IdentityImage2Path)
        {
            var customer = GetCurrentCustomer();
            return JsonUtil.Create(_iUploadService.UploadIdentityImagePathToSave(IdentityImage1Path, IdentityImage2Path, customer.Id));
        }

        [HttpPost("UploadDriverLicenseImagePath")]
        public JsonResult DriverLicenseImagePath(IFormFile DriverLicenseImage1Path, IFormFile DriverLicenseImage2Path)
        {
            var customer = GetCurrentCustomer();
            return JsonUtil.Create(_iUploadService.UploadDriverLicenseImagePath(DriverLicenseImage1Path, DriverLicenseImage2Path, customer.Id));
        }

        [HttpPost("UploadImageOptional")]
        public JsonResult UploadImageOptional(IFormFile file, string folderName, string fileName)
        {
            return JsonUtil.Create(_iUploadService.UploadImage(file, folderName, fileName));
        }

        [HttpPost("UploadFileOptional")]
        public JsonResult UploadFileOptional(IFormFile file, string folderName, string fileName)
        {
            return JsonUtil.Create(_iUploadService.UploadFile(file, folderName, fileName));
        }

        [HttpPost("UploadAvatarCustomerToSave")]
        public JsonResult UploadAvatarCustomerToSave(IFormFile file, int userId)
        {
            return JsonUtil.Create(_iUploadService.UploadAvatarCustomerToSave(file, userId));
        }

        [HttpGet("DeleteAvatarCustomer")]
        public JsonResult DeleteAvatarCustomer(string file, int userId)
        {
            return JsonUtil.Create(_iUploadService.DeleteAvatarCustomer(file, userId));
        }
    }
}
