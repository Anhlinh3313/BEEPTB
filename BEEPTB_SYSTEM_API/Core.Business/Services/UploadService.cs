using Core.Business.Services.Abstract;
using Core.Business.Services.Models;
using Core.Data.Abstract;
using Core.Entity.Entities;
using Core.Infrastructure.Http;
using Core.Infrastructure.Utils;
using Core.Infrastructure.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.DotNet.PlatformAbstractions;
using Microsoft.Extensions.Options;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.IO;
using System.Threading.Tasks;

namespace Core.Business.Services
{
    public partial class UploadService : BaseService, IUploadService
    {
        public UploadService(Microsoft.Extensions.Logging.ILogger<dynamic> logger, IOptions<AppSettings> optionsAccessor, IUnitOfWork unitOfWork) : base(logger, optionsAccessor, unitOfWork)
        {
        }

        public ResponseViewModel UploadImageToSave(IFormFile file, int userId)
        {

            if (file == null || file.Length == 0)
                return ResponseViewModel.CreateError("File not selected");
            else
            {
                if(file.ContentType.Split('/')[0] != "image")
                {
                    return ResponseViewModel.CreateError("Chỉ cho phép hình ảnh, vui lòng chọn lại!");
                }

                if(file.Length > 10000000)
                {
                    return ResponseViewModel.CreateError("Dung lượng tệp quá giới hạn cho phép, vui lòng chọn lại!");
                }
            }

            FileInfo fi = new FileInfo(file.FileName);
            string extn = fi.Extension;
            if (extn == "" || extn.Length == 0)
            {
                extn = ".jpeg";
            }
            string path;

            if (file.FileName.Contains("identity"))
            {
                path = $@"{"wwwroot"}/{"Identity"}/";
            }
            else if (file.FileName.Contains("driverLicense"))
            {
                path = $@"{"wwwroot"}/{"DriverLicense"}/";
            }
            else
            {
                path = $@"{"wwwroot"}/{"Avatar"}/";

            }


            if (!Directory.Exists(path))
            {
                Directory.CreateDirectory(path);
            }

            var fileName = $"{userId.ToString()}_{file.FileName}";
            var fullPath = Path.Combine(path,fileName);

            string[] listFile = Directory.GetFiles(path);

            foreach (var item in listFile)
            {
                if (item.Split('.')[0] == fullPath.Split('.')[0])
                {
                    File.Delete(item);
                }
            }

            using (var fileStream = new FileStream(fullPath, FileMode.CreateNew))
            {
                file.CopyTo(fileStream);
            }

            var result = fullPath.Remove(0, 7);
            return ResponseViewModel.CreateSuccess(result);
        }

        public ResponseViewModel UploadAvatarToSave(IFormFile file, int userId)
        {

            if (file == null || file.Length == 0)
                return ResponseViewModel.CreateError("File not selected");
            else
            {
                if (file.ContentType.Split('/')[0] != "image")
                {
                    return ResponseViewModel.CreateError("Chỉ cho phép hình ảnh, vui lòng chọn lại!");
                }

                if (file.Length > 10000000)
                {
                    return ResponseViewModel.CreateError("Dung lượng tệp quá giới hạn cho phép, vui lòng chọn lại!");
                }
            }

            FileInfo fi = new FileInfo(file.FileName);
            string extn = fi.Extension;

            string path = $@"{"wwwroot"}/{"Avatar"}/";


            if (!Directory.Exists(path))
            {
                Directory.CreateDirectory(path);
            }

            var fileName = $"{userId.ToString()}";
            var fullPath = Path.Combine(path, fileName);

            string[] listFile = Directory.GetFiles(path);

            foreach (var item in listFile)
            {
                if (item.Split('.')[0] == fullPath)
                {
                    File.Delete(item);
                }
            }

            using (var fileStream = new FileStream(fullPath + extn, FileMode.CreateNew))
            {
                file.CopyTo(fileStream);
            }

            var result = fullPath.Remove(0, 7) + extn;
            return ResponseViewModel.CreateSuccess(result);
        }

        public async Task<ResponseViewModel> UploadIncurredImages(IFormFile file)
        {
            {
                if (file == null || file.Length == 0)
                    return ResponseViewModel.CreateError("File not selected");
                else
                {
                    if (file.ContentType.Split('/')[0] != "image")
                    {
                        return ResponseViewModel.CreateError("Chỉ cho phép hình ảnh, vui lòng chọn lại!");
                    }

                    if (file.Length > 10000000)
                    {
                        return ResponseViewModel.CreateError("Dung lượng tệp quá giới hạn cho phép, vui lòng chọn lại!");
                    }
                }

                FileInfo fi = new FileInfo(file.FileName);
                string extn = fi.Extension;
                if(extn == "" || extn.Length == 0)
                {
                    extn = ".jpg";
                }

                DateTime currentDate = DateTime.Now;

                string fullPath = $@"{"wwwroot"}/{"IncurredFeeImages"}/";

                if (!Directory.Exists(fullPath))
                {
                    Directory.CreateDirectory(fullPath);
                }

                var uniqueFileName = $"{DateTime.Now.ToString("ddMMyyHHmmssffff")}{extn}";

                using (var fileStream = new FileStream(Path.Combine(fullPath, uniqueFileName), FileMode.CreateNew))
                {
                  await file.CopyToAsync(fileStream);
                }

                var result = fullPath.Remove(0, 7) + uniqueFileName;

                return ResponseViewModel.CreateSuccess(result);
            }
        }

        public ResponseViewModel UploadIdentityImagePathToSave(IFormFile IdentityImage1Path, IFormFile IdentityImage2Path, int? customerId)
        {
            if (IdentityImage1Path == null || IdentityImage1Path.Length == 0 || IdentityImage2Path == null || IdentityImage2Path.Length == 0)
                return ResponseViewModel.CreateError("File not selected");
            else
            {
                if (IdentityImage1Path.ContentType.Split('/')[0] != "image" || IdentityImage2Path.ContentType.Split('/')[0] != "image")
                {
                    return ResponseViewModel.CreateError("Chỉ cho phép hình ảnh, vui lòng chọn lại!");
                }

                if (IdentityImage1Path.Length > 10000000 || IdentityImage2Path.Length > 10000000)
                {
                    return ResponseViewModel.CreateError("Dung lượng tệp quá giới hạn cho phép, vui lòng chọn lại!");
                }
            }
            var dataCustomer = new ArrayList();

            IEnumerable<IFormFile> IdentityImagePath = new List<IFormFile> { IdentityImage1Path, IdentityImage2Path};
            foreach (var data in IdentityImagePath)
            {
                var dataFileName = data.FileName.Replace(".","_");
                FileInfo fi = new FileInfo(data.FileName);
                string extn = fi.Extension;

                string path = $@"{"wwwroot"}/{"Identity"}/";

                if (!Directory.Exists(path))
                {
                    Directory.CreateDirectory(path);
                }

                var fileName = $"{dataFileName + customerId.ToString()}";
                var fullPath = Path.Combine(path, fileName);

                string[] listFile = Directory.GetFiles(path);

                foreach (var item in listFile)
                {
                    if (item.Split('.')[0] == fullPath)
                    {
                        File.Delete(item);
                    }
                }

                using (var fileStream = new FileStream(fullPath + extn, FileMode.CreateNew))
                {
                    data.CopyTo(fileStream);
                }

                var result = fullPath.Remove(0, 7) + extn;
                // cập nhật hình cho căn cước công dân cho khách hàng
                Customer customer = _unitOfWork.RepositoryR<Customer>().GetSingle(x => x.Id == customerId);
                if(data.FileName == IdentityImage1Path.FileName)
                {
                    customer.IdentityImage1Path = result;
                }
                if (data.FileName == IdentityImage2Path.FileName)
                {
                    customer.IdentityImage2Path = result;
                }
                _unitOfWork.RepositoryCRUD<Customer>().Update(customer);
                _unitOfWork.Commit();
                dataCustomer.Add(customer);
            }    

            return ResponseViewModel.CreateSuccess(dataCustomer);
        }

        public ResponseViewModel UploadDriverLicenseImagePath(IFormFile DriverLicenseImage1Path, IFormFile DriverLicenseImage2Path, int? customerId)
        {
            if (DriverLicenseImage1Path == null || DriverLicenseImage1Path.Length == 0 || DriverLicenseImage2Path == null || DriverLicenseImage2Path.Length == 0)
                return ResponseViewModel.CreateError("File not selected");
            else
            {
                if (DriverLicenseImage1Path.ContentType.Split('/')[0] != "image" || DriverLicenseImage2Path.ContentType.Split('/')[0] != "image")
                {
                    return ResponseViewModel.CreateError("Chỉ cho phép hình ảnh, vui lòng chọn lại!");
                }

                if (DriverLicenseImage1Path.Length > 10000000 || DriverLicenseImage2Path.Length > 10000000)
                {
                    return ResponseViewModel.CreateError("Dung lượng tệp quá giới hạn cho phép, vui lòng chọn lại!");
                }
            }
            var dataCustomer = new ArrayList();

            IEnumerable<IFormFile> DriverLicenseImagePath = new List<IFormFile> { DriverLicenseImage1Path, DriverLicenseImage2Path };
            foreach (var data in DriverLicenseImagePath)
            {
                var dataFileName = data.FileName.Replace(".", "_");
                FileInfo fi = new FileInfo(data.FileName);
                string extn = fi.Extension;

                string path = $@"{"wwwroot"}/{"DriverLicense"}/";


                if (!Directory.Exists(path))
                {
                    Directory.CreateDirectory(path);
                }

                var fileName = $"{dataFileName + customerId.ToString()}";
                var fullPath = Path.Combine(path, fileName);

                string[] listFile = Directory.GetFiles(path);

                foreach (var item in listFile)
                {
                    if (item.Split('.')[0] == fullPath)
                    {
                        File.Delete(item);
                    }
                }

                using (var fileStream = new FileStream(fullPath + extn, FileMode.CreateNew))
                {
                    data.CopyTo(fileStream);
                }

                var result = fullPath.Remove(0, 7) + extn;
                // cập nhật hình cho căn cước công dân cho khách hàng
                Customer customer = _unitOfWork.RepositoryR<Customer>().GetSingle(x => x.Id == customerId);
                if (data.FileName == DriverLicenseImage1Path.FileName)
                {
                    customer.DriverLicenseImage1Path = result;
                }
                if (data.FileName == DriverLicenseImage2Path.FileName)
                {
                    customer.DriverLicenseImage2Path = result;
                }
                _unitOfWork.RepositoryCRUD<Customer>().Update(customer);
                _unitOfWork.Commit();
                dataCustomer.Add(customer);
            }

            return ResponseViewModel.CreateSuccess(dataCustomer);
        }

        public ResponseViewModel UploadImage(IFormFile file, string folderName, string fileName)
        {

            if (file == null || file.Length == 0)
                return ResponseViewModel.CreateError("File not selected");
            else
            {
                if (file.ContentType.Split('/')[0] != "image")
                {
                    return ResponseViewModel.CreateError("Chỉ cho phép hình ảnh, vui lòng chọn lại!");
                }

                if (file.Length > 10000000)
                {
                    return ResponseViewModel.CreateError("Dung lượng tệp quá giới hạn cho phép, vui lòng chọn lại!");
                }
            }

            FileInfo fi = new FileInfo(file.FileName);
            string extn = fi.Extension;

            string path = $@"{"wwwroot"}/{folderName}/";


            if (!Directory.Exists(path))
            {
                Directory.CreateDirectory(path);
            }

            var fullPath = Path.Combine(path, fileName + extn);

            string[] listFile = Directory.GetFiles(path);

            foreach (var item in listFile)
            {
                if (item == fullPath)
                {
                    File.Delete(item);
                }
            }

            using (var fileStream = new FileStream(fullPath, FileMode.CreateNew))
            {
                file.CopyTo(fileStream);
            }

            var result = fullPath.Remove(0, 7);
            return ResponseViewModel.CreateSuccess(result);
        }

        public ResponseViewModel UploadFile(IFormFile file, string folderName, string fileName)
        {
            {
                if (file == null || file.Length == 0)
                    return ResponseViewModel.CreateError("File not selected");
                else
                {
                    if (file.Length > 10000000)
                    {
                        return ResponseViewModel.CreateError("Dung lượng tệp quá giới hạn cho phép, vui lòng chọn lại!");
                    }
                }

                FileInfo fi = new FileInfo(file.FileName);
                string extn = fi.Extension;

                string fullPath = $@"{"wwwroot"}/{folderName}/";

                if (!Directory.Exists(fullPath))
                {
                    Directory.CreateDirectory(fullPath);
                }

                var uniqueFileName = $"{fileName}{extn}";

                using (var fileStream = new FileStream(Path.Combine(fullPath, uniqueFileName), FileMode.Create))
                {
                    file.CopyToAsync(fileStream);
                }

                var result = fullPath.Remove(0, 7) + uniqueFileName;

                return ResponseViewModel.CreateSuccess(result);
            }
        }
        public ResponseViewModel UploadAvatarCustomerToSave(IFormFile file, int userId)
        {
            Customer customer = _unitOfWork.RepositoryR<Customer>().GetSingle(x => x.UserId == userId);
            if (file == null || file.Length == 0)
                return ResponseViewModel.CreateError("File not selected");
            else
            {
                if (file.ContentType.Split('/')[0] != "image")
                {
                    return ResponseViewModel.CreateError("Chỉ cho phép hình ảnh, vui lòng chọn lại!");
                }

                if (file.Length > 10000000)
                {
                    return ResponseViewModel.CreateError("Dung lượng tệp quá giới hạn cho phép, vui lòng chọn lại!");
                }
            }

            FileInfo fi = new FileInfo(file.FileName);
            string extn = fi.Extension;

            string path = $@"{"wwwroot"}/{"Avatar"}/";


            if (!Directory.Exists(path))
            {
                Directory.CreateDirectory(path);
            }

            var fileName = $"{customer.Id.ToString()}";
            var fullPath = Path.Combine(path, fileName);

            string[] listFile = Directory.GetFiles(path);

            foreach (var item in listFile)
            {
                if (item.Split('.')[0] == fullPath)
                {
                    File.Delete(item);
                }
            }
            using (var fileStream = new FileStream(fullPath + extn, FileMode.CreateNew))
            {
                file.CopyTo(fileStream);
            }
            var result = fullPath.Remove(0, 7) + extn;
            customer.AvatarPath = result;
            _unitOfWork.RepositoryCRUD<Customer>().Update(customer);
            _unitOfWork.Commit();
            return ResponseViewModel.CreateSuccess(result);
        }

        public ResponseViewModel DeleteAvatarCustomer(string file, int userId)
        {
            Customer customer = _unitOfWork.RepositoryR<Customer>().GetSingle(x => x.UserId == userId);
            string fullPath = $@"{ApplicationEnvironment.ApplicationBasePath}{file}";
            //string fullPath = $@"D:\angular\BEEPTB\BEEPTB_SYSTEM_API\Core.Api\{file}";
            FileInfo files = new FileInfo(fullPath);
            if (files.Exists)
            {
                File.Delete(fullPath);
                customer.AvatarPath = null;
                _unitOfWork.RepositoryCRUD<Customer>().Update(customer);
                _unitOfWork.Commit();
            }
            return ResponseViewModel.CreateSuccess(customer);
        }
    }
}
