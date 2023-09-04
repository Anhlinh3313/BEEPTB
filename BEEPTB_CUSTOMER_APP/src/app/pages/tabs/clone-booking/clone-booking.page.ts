import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import * as moment from "moment";
import { CalculateModel } from 'src/app/shared/models/calculate.model';
import { PriceService } from 'src/app/shared/services/apis/priceService.service';
import { MsgService } from 'src/app/shared/services/locals/msg-message.service';
import { CalculateAllModel } from 'src/app/shared/models/calculateAll.model';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingMapPage } from '../booking/booking-map/booking-map.page';
import { BookingService } from 'src/app/shared/services/apis/booking.service';
import { BookingDetailModel } from 'src/app/shared/models/bookingDetail.model';

@Component({
  selector: 'app-clone-booking',
  templateUrl: './clone-booking.page.html',
})
export class CloneBookingPage implements OnInit {

  checkBookingMonth: boolean;
  serviceId: number;
  startDate: any;
  roundingStartDate: any;
  endDate: any;
  vehicleTypeId: number;
  calculateModel: CalculateModel = new CalculateModel();
  borderCheck = "border: 2px solid #34a4b6;";
  borderNotCheck = "border: none";
  borderMotorcycleNumber: string;
  borderAcceleratorMotorcycle: string;
  borderClutchMotorcycle: string;
  startMonths: any;
  getMonth: any;
  price: CalculateAllModel = new CalculateAllModel();
  priceMotorcycleNumber: any;
  priceAcceleratorMotorcycle: any;
  priceClutchMotorcycle: any;
  priceVehicle: any;
  vehicleName: string;
  motorcycleNumberkHidden: boolean = false;
  acceleratorMotorcycleHidden: boolean = false;
  clutchMotorcycleHidden: boolean = false;
  cloneBookingId: number;
  bookingDetail: BookingDetailModel = new BookingDetailModel();
  checkService: boolean = false;
  checkCSSDate: string;
  checkMothLoad: boolean = false;
  checkLoneBooking: boolean = true;
  adress: string;

  constructor(
    private modalController: ModalController,
    private priceService: PriceService,
    private msgService: MsgService,
    private router: Router,
    private route: ActivatedRoute,
    private bookingService: BookingService,
  ) {
  }

  ngOnInit() {
    this.intData();
  }

  async intData() {
    await this.loadParamBookingId();
  }

  loadParamBookingId() {
    this.route.queryParams.subscribe(async params => {
      if (params) {
        this.cloneBookingId = await JSON.parse(params.bookingId);
        this.loadBookingDetail(this.cloneBookingId)
      }
    });
  }

  async loadBookingDetail(item) {
    let res = await this.bookingService.getBookingDetail(item);
    if (res.isSuccess) {
      this.bookingDetail = res.data;
      this.vehicleTypeId = res.data.vehicleId;
      this.checkService = true;
      this.checkMothLoad = true;
      this.adress = res.data.address;
      this.calculateStartMonths(res.data)
      await this.intDateNow();
      await this.changeService(res.data.serviceId);
    } else {
      this.bookingDetail = null;
      this.msgService.error(res.message);
      this.motorcycleNumber();
    }
  }

  async calculateStartMonths(booking) {
    let starDateMont = new Date(booking.startDate).getMonth();
    let endDateMont = new Date(booking.endDate).getMonth();
    let totalDateMonth = endDateMont - starDateMont;
    this.startMonths = moment(new Date(booking.startDate).setMonth(totalDateMonth)).format(environment.formatDateTime);
    console.log(this.startMonths);
  }

  intDateNow() {
    if (!this.bookingDetail) {
      let dataNow = new Date();
      let minutesNow = dataNow.getMinutes();
      if (minutesNow > 0) {
        // xét phút lớn hơn cộng thêm giờ một đơn vị
        let getDateNow = new Date(dataNow.getFullYear(), dataNow.getMonth(), dataNow.getDate(), dataNow.getHours() + 1);
        if (dataNow.getHours() == 23) {
          let getDateNowMinuteEndDate = new Date(getDateNow.getFullYear(), getDateNow.getMonth(), getDateNow.getDate(), dataNow.getHours() + 1);
          this.startDate = moment(getDateNow).format(environment.formatDateTime);
          this.roundingStartDate = moment(getDateNow).format(environment.formatDateTime);
          this.endDate = moment(getDateNowMinuteEndDate).format(environment.formatDateTime);
        } else {
          let getDateNowMinuteEndDate = new Date(getDateNow.getFullYear(), getDateNow.getMonth(), getDateNow.getDate() + 1, dataNow.getHours() + 1);
          this.startDate = moment(getDateNow).format(environment.formatDateTime);
          this.roundingStartDate = moment(getDateNow).format(environment.formatDateTime);
          this.endDate = moment(getDateNowMinuteEndDate).format(environment.formatDateTime);
        }
      } else if (minutesNow == 0) {
        let getDateByMinute = new Date(dataNow.getFullYear(), dataNow.getMonth(), dataNow.getDate(), dataNow.getHours());
        let getDateByMinuteEndDate = new Date(getDateByMinute.getFullYear(), getDateByMinute.getMonth(), getDateByMinute.getDate() + 1, dataNow.getHours());
        this.startDate = moment(getDateByMinute).format(environment.formatDateTime);
        this.roundingStartDate = moment(getDateByMinute).format(environment.formatDateTime);
        this.endDate = moment(getDateByMinuteEndDate).format(environment.formatDateTime);
      }
      this.startMonths = moment(dataNow.setMonth(0)).format(environment.formatDateTime);
    } else {
      this.startDate = moment(this.bookingDetail.startDate).format(environment.formatDateTime);
      this.roundingStartDate = moment(this.bookingDetail.startDate).format(environment.formatDateTime);
      this.endDate = moment(this.bookingDetail.endDate).format(environment.formatDateTime);
    }
  }

  checkBookingDateTable() {
    this.checkBookingMonth = true;
    this.serviceId = 12;
  }

  closeUpdateInfo() {
    this.router.navigate(["/tabs/home"]);
  }

  async bookingMonth() {
    //open modal
    const modal = await this.modalController.create({
      component: BookingMapPage,
      componentProps: {
        "dataBoking": this.calculateModel,
        "month": this.getMonth,
        "priceVehicle": this.priceVehicle,
        "vehicleName": this.vehicleName,
        "checkLoneBooking": this.checkLoneBooking,
        "adress": this.adress,

      }
    });
    // close modal
    modal.onDidDismiss().then((res) => {
    });
    return await modal.present();
  }

  async changeService(event) {
    if (this.checkService) {
      this.serviceId = this.bookingDetail.serviceId;
      this.checkService = false
      if (this.serviceId == 12) {
        this.checkCSSDate = 'width: 50%;';
        this.checkBookingMonth = true;
        this.checkBookingDateTable();
      } else {
        this.checkCSSDate = 'width: 100%;';
        this.checkBookingMonth = false;
      }
      await this.calculateBooking();
    } else {
      this.serviceId = event.detail.value;
      this.checkService = false;
      await this.calculateBooking();
      if (this.serviceId == 12) {
        this.checkCSSDate = 'width: 50%;';
        this.checkBookingMonth = true;
        this.checkBookingDateTable();
      } else {
        this.checkBookingMonth = false;
        this.checkCSSDate = 'width: 100%;';
      }
    }
  }

  async changeStartDate() {
    if (!this.checkBookingMonth) {
      this.getDateByStartDate();
    } else {
      this.getDateByMonth();
    }
    await this.calculateBooking();
  }
  //chọn ngày bắt đầu
  getDateByStartDate() {
    const date = new Date(this.startDate);
    let minutesNow = date.getMinutes();
    if (minutesNow > 0) {
      // xét phút lớn hơn cộng thêm giờ một đơn vị
      let getDateByMinute = new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours() + 1);
      if (date.getHours() == 23) {
        let getDateByMinuteEndDate = new Date(getDateByMinute.getFullYear(), getDateByMinute.getMonth(), getDateByMinute.getDate(), date.getHours() + 1);
        this.roundingStartDate = moment(getDateByMinute).format(environment.formatDateTime);
        this.endDate = moment(getDateByMinuteEndDate).format(environment.formatDateTime);
      } else {
        let getDateByMinuteEndDate = new Date(getDateByMinute.getFullYear(), getDateByMinute.getMonth(), getDateByMinute.getDate() + 1, date.getHours() + 1);
        this.roundingStartDate = moment(getDateByMinute).format(environment.formatDateTime);
        this.endDate = moment(getDateByMinuteEndDate).format(environment.formatDateTime);
      }
    } else if (minutesNow == 0) {
      let getDateByMinute = new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours());
      let getDateByMinuteEndDate = new Date(getDateByMinute.getFullYear(), getDateByMinute.getMonth(), getDateByMinute.getDate() + 1, date.getHours());
      this.roundingStartDate = moment(getDateByMinute).format(environment.formatDateTime);
      this.endDate = moment(getDateByMinuteEndDate).format(environment.formatDateTime);
    }
  }
  //chọn ngày kêt thúc theo tháng
  getDateByMonth() {
    if (this.startDate && this.bookingDetail.serviceId == 12) {
      const date = new Date(this.startDate);
      let minutesNow = date.getMinutes();
      let checkMonth = new Date(this.startMonths);

      if (this.startMonths) {
        this.getMonth = checkMonth.getMonth() + 1;
      } else {
        this.getMonth = 0;
      }
      if (minutesNow > 0) {
        // xét phút lớn hơn cộng thêm giờ một đơn vị
        let getDateByMinute = new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours() + 1);
        if (date.getHours() == 23) {
          let getDateByMinuteEndDate = new Date(getDateByMinute.getFullYear(), getDateByMinute.getMonth() + this.getMonth, getDateByMinute.getDate(), date.getHours() + 1);
          this.roundingStartDate = moment(getDateByMinute).format(environment.formatDateTime);
          this.laodRoundingEndDate(getDateByMinuteEndDate);
        } else {
          let getDateByMinuteEndDate = new Date(getDateByMinute.getFullYear(), getDateByMinute.getMonth() + this.getMonth, getDateByMinute.getDate() + 1, date.getHours() + 1);
          this.roundingStartDate = moment(getDateByMinute).format(environment.formatDateTime);
          this.laodRoundingEndDate(getDateByMinuteEndDate);
        }
      } else if (minutesNow == 0) {
        let getDateByMinute = new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours());
        let getDateByMinuteEndDate = new Date(getDateByMinute.getFullYear(), getDateByMinute.getMonth() + this.getMonth, getDateByMinute.getDate(), date.getHours());
        this.roundingStartDate = moment(getDateByMinute).format(environment.formatDateTime);
        this.laodRoundingEndDate(getDateByMinuteEndDate);
      }
    } else {
      this.msgService.error("Vui lòng chọn ngày bắt đầu");
    }
  }

  laodRoundingEndDate(date) {
    if (!this.checkMothLoad) {
      this.endDate = moment(date).format(environment.formatDateTime);
    } else {
      this.endDate = moment(this.bookingDetail.endDate).format(environment.formatDateTime);
    }
    this.checkMothLoad = false;
  }
  //chọn ngày kêt thúc theo ngày
  getDateByEndDate() {
    let checkStartDate = Date.parse((new Date(this.startDate)).toString());
    let checkEndDate = Date.parse((new Date(this.endDate)).toString());
    if (checkStartDate < checkEndDate) {
      const date = new Date(this.endDate);
      this.endDate = moment(date).format(environment.formatDateTime);
    } else {
      this.msgService.error("Vui lòng chọn ngày kết thúc lớn hơn ngày hiện tại");
    }
    this.calculateBooking();
  }

  async motorcycleNumber() {
    this.vehicleTypeId = 16;
    this.borderMotorcycleNumber = this.borderCheck;
    this.borderAcceleratorMotorcycle = this.borderNotCheck;
    this.borderClutchMotorcycle = this.borderNotCheck;
    this.priceVehicle = this.priceMotorcycleNumber;
    this.vehicleName = "Xe số";
  }

  acceleratorMotorcycle() {
    this.vehicleTypeId = 17;
    this.borderAcceleratorMotorcycle = this.borderCheck;
    this.borderMotorcycleNumber = this.borderNotCheck;
    this.borderClutchMotorcycle = this.borderNotCheck;
    this.priceVehicle = this.priceAcceleratorMotorcycle;
    this.vehicleName = "Xe ga";
  }

  clutchMotorcycle() {
    this.vehicleTypeId = 18;
    this.borderClutchMotorcycle = this.borderCheck;
    this.borderAcceleratorMotorcycle = this.borderNotCheck;
    this.borderMotorcycleNumber = this.borderNotCheck;
    this.priceVehicle = this.priceClutchMotorcycle;
    this.vehicleName = "Xe côn";
  }

  async calculateBooking() {
    this.calculateModel.serviceId = this.serviceId;
    this.calculateModel.startDate = this.roundingStartDate;
    this.calculateModel.endDate = this.endDate;
    this.calculateModel.vehicleTypeId = this.vehicleTypeId;
    let res = await this.priceService.calculateAll(this.calculateModel);
    if (res.data.length > 0) {
      this.price = res.data;
      this.laodPriceVehicle(this.price);
      this.checkPriceVehicle();
    } else {
      this.motorcycleNumber();
      this.priceMotorcycleNumber = 0;
      this.priceAcceleratorMotorcycle = 0;
      this.priceClutchMotorcycle = 0;
      this.priceVehicle = 0;
      this.msgService.error(res.message || "Không tìm thấy bảng giá đặt xe");
    }
  }
  loadPriceCompleted(item) {
  }

  //hiển thị bảng giá cho từng loại xe
  laodPriceVehicle(price) {
    for (let i = 0; i < price.length; i++) {
      if (price[i].vehicleTypeId == 16) {
        this.priceMotorcycleNumber = price[i].price ? this.formatMoney(price[i].price) : 0;
      } else if (price[i].vehicleTypeId == 17) {
        this.priceAcceleratorMotorcycle = price[i].price ? this.formatMoney(price[i].price) : 0;
        if (price[i].vehicleTypeId != 16) {
          this.borderClutchMotorcycle = this.borderNotCheck;
          this.borderAcceleratorMotorcycle = this.borderCheck;
          this.borderMotorcycleNumber = this.borderNotCheck;
          if (!this.priceVehicle) {
            this.priceVehicle = this.priceAcceleratorMotorcycle;
          }
        }
      } else if (price[i].vehicleTypeId == 18) {
        this.priceClutchMotorcycle = price[i].price ? this.formatMoney(price[i].price) : 0;
        if (price[i].vehicleTypeId != 16) {
          this.borderClutchMotorcycle = this.borderNotCheck;
          this.borderAcceleratorMotorcycle = this.borderNotCheck;
          this.borderMotorcycleNumber = this.borderCheck;
          if (!this.priceVehicle) {
            this.priceVehicle = this.priceClutchMotorcycle;
          }
        }
      }
    }
  }

  checkPriceVehicle() {
    if (!this.priceMotorcycleNumber) {
      this.motorcycleNumberkHidden = true;
    }
    if (!this.priceAcceleratorMotorcycle) {
      this.acceleratorMotorcycleHidden = true;
    }
    if (!this.priceClutchMotorcycle) {
      this.clutchMotorcycleHidden = true;
    }
  }

  calculateBookingMap() {
    this.bookingMonth();
  }

  formatMoney(item) {
    let money = parseInt(item);
    return money.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
  }
}
