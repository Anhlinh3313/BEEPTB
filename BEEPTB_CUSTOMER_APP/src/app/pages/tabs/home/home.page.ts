import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingModel } from 'src/app/shared/models/booking.model';
import { UserModel } from 'src/app/shared/models/user.model';
import { BookingService } from 'src/app/shared/services/apis/booking.service';
import { CustomerService } from 'src/app/shared/services/apis/customer.service';
import { LocalStorgeService } from 'src/app/shared/services/locals/local-storge.service';
import { MsgService } from 'src/app/shared/services/locals/msg-message.service';
import * as moment from "moment";
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
})
export class HomePage implements OnInit {

  bookingId: any;
  pageCheckBooking: boolean;
  // pageHoneInfo: boolean;
  // pageHoneHistory: boolean;
  user: UserModel = new UserModel();
  userName: string;
  messageHomPage: string;
  booking: BookingModel[] = [];
  bookingStatusName: string;
  bookingStatusId: number;
  dateCreateBooking: string;
  hourCreateBooking: string;

  constructor(
    private router: Router,
    private localStorageService: LocalStorgeService,
    private customerService: CustomerService,
    private msgService: MsgService,
    private bookingService: BookingService,
  ) { }

  async ngOnInit() {
    await this.intData();
  }

  async intData() {
    let Id = await this.localStorageService.get("userId")
    let res = await this.customerService.getCurrentCustomer(Id);
    if (res.isSuccess) {
      this.user = res.data;
      await this.loadBookingByCustomerId(this.user.id);
    }
    this.getDateNow();
  }

  async loadBookingByCustomerId(item) {
    let res = await this.bookingService.getBookingByCustomerId(item);
    if (res.data.isSuccess) {
      this.booking = res.data;
      this.bookingId = res.data.id;
      this.bookingStatusId = res.data.bookingStatusId;
      this.bookingStatusName = res.data.bookingStatusName;
      this.dateCreateBooking = moment(res.data.createdWhen).format(environment.formatDateCreteBooking);
      this.hourCreateBooking = moment(res.data.createdWhen).format(environment.formatHourCreteBooking);
    } else {
      this.booking = [];
    }
  }

  getDateNow() {
    let dateNow = new Date();
    const hourNow = dateNow.getHours();
    const MinuteNow = dateNow.getMinutes();
    if (hourNow >= 3 && hourNow <= 11 && MinuteNow <= 30) {
      this.messageHomPage = "Chào buổi sáng";
    } else if (hourNow >= 11 && hourNow <= 17 || MinuteNow == 30 || MinuteNow == 0) {
      this.messageHomPage = "Chào buổi trưa";
    } else {
      this.messageHomPage = "Chào buổi tối";
    }
  }

  ionViewWillEnter() {
    this.intData();
  }

  customerInfo() {
    this.router.navigate(["/tabs/customer-info"]);
  }

  async loadBooking() {
    this.checkBooknigByStatusId();
  }

  async checkInformationCustomer() {
    let message = "Vui lòng cập nhật thông tin CMND/ CCCD và bằng lái xe";
    let cancelName = "Để sau";
    let confirmName = "Cập nhật";
    let resLogOut = await this.msgService.checkInfoCustomerYesNo(message, cancelName, confirmName);
    if (resLogOut) {
      this.router.navigate(["/tabs/customer-detail"]);
    }
  }

  async checkBooknigByStatusId() {
    if (this.bookingStatusId == 1 || this.bookingStatusId == 2 || this.bookingStatusId == 3) {
      let resLogOut = await this.msgService.alertYesNo("Bạn không thể thực hiện thao tác này");
      if (resLogOut) {
        this.router.navigate([""]);
      }
    } else {
      this.informationCustomer(this.user);
    }
  }

  informationCustomer(item) {
    if (item.driverLicenseImage1Path && item.driverLicenseImage2Path &&
      item.identityImage1Path && item.identityImage2Path && item.identityCard) {
      this.router.navigate(["/tabs/booking"]);
    } else {
      this.checkInformationCustomer();
    }
  }

  checkBooking() {
    // this.router.navigate(["/tabs/booking"]);
  }

  onClickBookingDetail() {
    this.router.navigateByUrl("/tabs/booking-detail" + "/?bookingId=" + this.bookingId);
  }
}
