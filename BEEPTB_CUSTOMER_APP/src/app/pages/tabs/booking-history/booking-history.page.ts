import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingModel } from 'src/app/shared/models/booking.model';
import { BookingFilterModel } from 'src/app/shared/models/bookingFilter.model';
import { BookingStatusModel } from 'src/app/shared/models/bookingStatus.model';
import { BookingService } from 'src/app/shared/services/apis/booking.service';
import { BookingStatusService } from 'src/app/shared/services/apis/bookingStatus.service';
import { LocalStorgeService } from 'src/app/shared/services/locals/local-storge.service';
import { MsgService } from 'src/app/shared/services/locals/msg-message.service';

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.page.html',
})
export class BookingHistoryPage implements OnInit {

  historyData: boolean = true;
  historyNotData: boolean = true;
  bookingStatus: BookingStatusModel[] = [];
  bookingFilter: BookingFilterModel = new BookingFilterModel();
  booking: BookingModel[] = [];

  colorArr = {
    1: "#34A4B6",
    2: "#02A512",
    3: "red",
    4: "#777777",
    5: "#1673FE",
  };

  imgArr = {
    1: "../../../assets/icon/icon_motorcycleNumber.svg",
    2: "../../../assets/icon/icon_acceleratorMotorcycle.svg",
    3: "../../../assets/icon/icon_clutchMotorcycle.svg",
  };

  colorStatus: any;
  iconVehicles: any;

  constructor(
    private router: Router,
    private bookingStatusService: BookingStatusService,
    private bookingService: BookingService,
    private msgService: MsgService,
    private localStorageService: LocalStorgeService,
  ) {
  }

  ngOnInit() {
    this.intData();
  }

  intData() {
    this.historyNotData = false;
    this.laodBookingStatus();
    this.laodBookingHistory();
  }

  async laodBookingStatus() {
    this.bookingStatus = await this.bookingStatusService.getAll();
  }

  boking() {
    this.router.navigate(["/tabs/home"]);
  }

  back() {
    window.history.back();
  }

  async laodBookingHistory() {
    let customerId = await this.localStorageService.get("id");
    this.bookingFilter.CustomerId = parseInt(customerId);
    let res = await this.bookingService.getListBookingsByCurrentCustomer(this.bookingFilter);
    if (res.isSuccess) {
      this.booking = res.data;
      await this.checkBookingStatus(res.data);
      await this.checkVehiclesType(res.data);
    } else {
      this.booking = [];
      this.historyNotData = true;
      this.historyData = false;
      this.msgService.error(res.message || "không tìm thấy danh sách đặt xe");
    }
  }

  checkBookingStatus(item) {
    item.forEach(e => {
      if (e.bookingStatusId == 1) {
        e.colorStatus = this.colorArr[1];
      } else if (e.bookingStatusId == 2) {
        e.colorStatus = this.colorArr[2];
      } else if (e.bookingStatusId == 3) {
        e.colorStatus = this.colorArr[2];
      } else if (e.bookingStatusId == 4) {
        e.colorStatus = this.colorArr[3];
      } else if (e.bookingStatusId == 5) {
        e.colorStatus = this.colorArr[4];
      } else if (e.bookingStatusId == 6) {
        e.colorStatus = this.colorArr[3];
      } else if (e.bookingStatusId == 10) {
        e.colorStatus = this.colorArr[5];
      }
    });
  }

  checkVehiclesType(vehicles) {
    vehicles.forEach(e => {
      if (e.vehicleTypeName == "Xe máy") {
        e.iconType = this.imgArr[1];
      } else if (e.vehicleTypeName == "Xe gaaa") {
        e.iconType = this.imgArr[2];
      } else if (e.vehicleTypeName == "Xe côn") {
        e.iconType = this.imgArr[3];
      }
    });
  }
}
