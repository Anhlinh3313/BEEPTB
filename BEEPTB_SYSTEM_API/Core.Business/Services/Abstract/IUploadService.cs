using Core.Entity.Entities;
using Core.Infrastructure.ViewModels;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Core.Business.Services.Abstract
{
    public interface IUploadService
    {
        ResponseViewModel UploadImageToSave(IFormFile file, int userId);
        ResponseViewModel UploadAvatarToSave(IFormFile file, int userId);
        ResponseViewModel UploadIdentityImagePathToSave(IFormFile IdentityImage1Path, IFormFile IdentityImage2Path, int? customerId);
        ResponseViewModel UploadDriverLicenseImagePath(IFormFile DriverLicenseImage1Path, IFormFile DriverLicenseImage2Path, int? customerId);
        Task<ResponseViewModel> UploadIncurredImages(IFormFile file);
        ResponseViewModel UploadImage(IFormFile file, string folderName, string fileName);
        ResponseViewModel UploadFile(IFormFile file, string folderName, string fileName);
        ResponseViewModel UploadAvatarCustomerToSave(IFormFile file, int userId);
        ResponseViewModel DeleteAvatarCustomer(string file, int userId);
    }
}
