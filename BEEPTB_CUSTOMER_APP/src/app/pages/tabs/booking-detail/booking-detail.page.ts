import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingDetailModel } from 'src/app/shared/models/bookingDetail.model';
import { BookingService } from 'src/app/shared/services/apis/booking.service';
import { MsgService } from 'src/app/shared/services/locals/msg-message.service';
import * as moment from "moment";
import { environment } from 'src/environments/environment';
import { BookingUpdateStatus } from 'src/app/shared/models/bookingUpdateStatus.model';
import { AuthService } from 'src/app/shared/services/apis/auth.service';

@Component({
  selector: 'app-booking-detail',
  templateUrl: './booking-detail.page.html',
})
export class BookingDetailPage implements OnInit {
  @ViewChild('rating') rating: any;
  bookingId: any;
  bookingDetail: BookingDetailModel = new BookingDetailModel();
  startDate: any;
  endDate: any;
  bookingUpdateStatus: BookingUpdateStatus = new BookingUpdateStatus();
  bookingCancelAndContact: boolean = true;
  bookingReset: boolean = true;
  evaluate: boolean = false;
  statusCancel: string = 'Đơn hàng bị từ chối'

  constructor(
    private route: ActivatedRoute,
    private bookingService: BookingService,
    private msgService: MsgService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.intData();
  }

  intData() {
    this.loadParamBookingId();
    this.loadBookingDetail();
    this.bookingReset = false;
    this.evaluate = false;
  }

  loadParamBookingId() {
    this.route.queryParams.subscribe(params => {
      if (params) {
        this.bookingId = JSON.parse(params.bookingId);
      }
    });
  }

  async loadBookingDetail() {
    let res = await this.bookingService.getBookingDetail(this.bookingId);
    if (res.isSuccess) {
      this.bookingDetail = res.data;
      this.loadDataTable(this.bookingDetail);
    } else {
      this.bookingDetail = null;
      this.msgService.error(res.message);
    }
  }

  loadDataTable(item) {
    this.startDate = moment(item.startDate).format(environment.formatDateTime);
    this.endDate = moment(item.endDate).format(environment.formatDateTime);
  }

  async bookingsCancel() {
    this.bookingUpdateStatus.bookingId = this.bookingId;
    let res = await this.bookingService.customerCancel(this.bookingUpdateStatus);
    if (res.isSuccess) {
      this.msgService.success("huỹ đơn thành công");
      this.bookingCancelAndContact = false;
      this.bookingReset = true;
    } else {
      this.msgService.error(res.message || "huỹ đơn không thành công");
    }
  }

  async checkBookingsCancel() {
    let resLogOut = await this.msgService.alertYesNo("Bạn có muốn huỹ đơn");
    if (resLogOut) {
      this.bookingsCancel();
    }
  }

  closeUpdateInfo() {
    this.router.navigate(["/tabs/home"]);
  }

  onRatingChange(rating) {
    console.log('The evaluation was modified and now its value is: ', rating);
    // do your stuff
  }

  checkCancel() {
    this.evaluate = false;
  }

  loadBookingReset() {
    this.router.navigateByUrl("/tabs/clone-booking" + "/?bookingId=" + this.bookingDetail.id);
  }
}
