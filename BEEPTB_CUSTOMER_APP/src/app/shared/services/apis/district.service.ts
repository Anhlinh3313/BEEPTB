import { Injectable } from '@angular/core';
import { GeneralService } from './general.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
//
import { ResponseModel } from '../../models-management/models/response.model';
import { MsgService } from '../locals/msg-message.service';
import { UploadImageModel } from '../../models/uploadImages.model';
import { CalculateModel } from '../../models/calculate.model';
import { FilterModel } from '../../models/filterModel.model';

@Injectable({
  providedIn: 'root'
})
export class DistrictService extends GeneralService {

  constructor(
    protected http: HttpClient,
    protected alertService: MsgService,
  ) {
    super(http, alertService, environment.apiCoreUrl, "District");
  }

  async getDistrictByNameDaLat(model: FilterModel): Promise<ResponseModel> {
    const res = await this.postCustomApi('GetListDistricts', model);
    return res;
  }
}  