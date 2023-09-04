import { Injectable } from '@angular/core';
import { GeneralService } from './general.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
//
import { ResponseModel } from '../../models-management/models/response.model';
import { MsgService } from '../locals/msg-message.service';
import { CalculateModel } from '../../models/calculate.model';

@Injectable({
  providedIn: 'root'
})
export class PriceService extends GeneralService {

  constructor(
    protected http: HttpClient,
    protected alertService: MsgService,
  ) {
    super(http, alertService, environment.apiCoreUrl, "PriceService");
  }

  async calculate(model: CalculateModel): Promise<ResponseModel> {
    const res = await this.postCustomApi('Calculate', model);
    return res;
  }

  async calculateAll(model: CalculateModel): Promise<ResponseModel> {
    const res = await this.postCustomApi('CalculateAll', model);
    return res;
  }
}  