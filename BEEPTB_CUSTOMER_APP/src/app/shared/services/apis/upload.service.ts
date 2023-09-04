import { Injectable } from '@angular/core';
import { GeneralService } from './general.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
//
import { ResponseModel } from '../../models-management/models/response.model';
import { MsgService } from '../locals/msg-message.service';
import { UploadImageModel } from '../../models/uploadImages.model';

@Injectable({
  providedIn: 'root'
})
export class UploadService extends GeneralService {

  constructor(
    protected http: HttpClient,
    protected alertService: MsgService,
  ) {
    super(http, alertService, environment.apiCoreUrl, "Upload");
  }

  async UploadIdentity(model: UploadImageModel): Promise<ResponseModel>{
    let formData = new FormData();
    formData.append("IdentityImage1Path", model.file1st);
    formData.append("IdentityImage2Path", model.file2nd);
    const res = await this.postCustomApi('UploadIdentityImagePath', formData);
    return res;
  }

  async UploadDriverCard(model: UploadImageModel): Promise<ResponseModel>{
    let formData = new FormData();
    formData.append("DriverLicenseImage1Path", model.file1st);
    formData.append("DriverLicenseImage2Path", model.file2nd);
    const res = await this.postCustomApi('UploadDriverLicenseImagePath', formData);
    return res;
  }

  async getImageByPath(path: string){
    let params = new HttpParams();
    params = params.append("imagePath", path);
    let res = await this.getWithParams("GetImageByPath", params);
    if (!this.isValidResponse(res)) return;
    return res.data;
  }

  
  async uploadAvatarCustomerToSave(file: any, userId: number): Promise<ResponseModel>{
    let formData = new FormData();
    formData.append("file", file);
    formData.append("userId", userId+'');
    const res = await this.postCustomApi('UploadAvatarCustomerToSave', formData);
    return res;
  }

  async deleteAvatarCustomer(file: string, userId: number): Promise<ResponseModel>{
    let params = new HttpParams();
    params = params.append("file", file);
    params = params.append("userId", userId+'');
    let res = await this.getWithParams("DeleteAvatarCustomer", params);
    return res;
  }
}  