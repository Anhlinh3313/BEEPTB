import { Injectable } from '@angular/core';
import { GeneralService } from './general.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
//
import { ResponseModel } from '../../models-management/models/response.model';
import { MsgService } from '../locals/msg-message.service';
import { CalculateModel } from '../../models/calculate.model';
import { BookingUpdateStatus } from '../../models/bookingUpdateStatus.model';

@Injectable({
  providedIn: 'root'
})
export class BookingStatusService extends GeneralService {

  constructor(
    protected http: HttpClient,
    protected alertService: MsgService,
  ) {
    super(http, alertService, environment.apiCoreUrl, "BookingStatus");
  }
}  