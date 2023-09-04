import { Injectable } from '@angular/core';
import { GeneralService } from './general.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
//
import { ResponseModel } from '../../models-management/models/response.model';
import { MsgService } from '../locals/msg-message.service';
import { CalculateModel } from '../../models/calculate.model';
import { BookingUpdateStatus } from '../../models/bookingUpdateStatus.model';
import { BookingFilterModel } from '../../models/bookingFilter.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService extends GeneralService {

  constructor(
    protected http: HttpClient,
    protected alertService: MsgService,
  ) {
    super(http, alertService, environment.apiCoreUrl, "Booking");
  }

  async createBooking(model: CalculateModel): Promise<ResponseModel> {
    const res = await this.postCustomApi('Create', model);
    return res;
  }

  async getBookingDetail(bookingId: number): Promise<ResponseModel>{
    let params = new HttpParams();
    params = params.append("bookingId", bookingId + '');
    const res = await this.getWithParams('GetBookingDetail', params);
    return res;
  }

  async customerCancel(model: BookingUpdateStatus): Promise<ResponseModel> {
    const res = await this.postCustomApi('CustomerCancel', model);
    return res;
  }

  async getListBookingsByCurrentCustomer(model: BookingFilterModel): Promise<ResponseModel> {
    const res = await this.postCustomApi('GetListBookingsByCurrentCustomer', model);
    return res;
  }

  async getBookingByCustomerId(customerId: number): Promise<ResponseModel>{
    let params = new HttpParams();
    params = params.append("customerId", customerId + '');
    const res = await this.getWithParams('GetBookingByCustomerId', params);
    return res;
  }
}  