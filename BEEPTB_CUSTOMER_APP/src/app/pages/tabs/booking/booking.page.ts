import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { BookingMapPage } from './booking-map/booking-map.page';
import * as moment from "moment";
import { CalculateModel } from 'src/app/shared/models/calculate.model';
import { PriceService } from 'src/app/shared/services/apis/priceService.service';
import { MsgService } from 'src/app/shared/services/locals/msg-message.service';
import { CalculateAllModel } from 'src/app/shared/models/calculateAll.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
})
export class BookingPage implements OnInit {

  checkBookingDate: boolean;
  checkBookingMonth: boolean;
  serviceId: number;
  startDate: any = new Date();
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
  checkLoneBooking: boolean = false;
  adress: string = null;

  constructor(
    private modalController: ModalController,
    private priceService: PriceService,
    private msgService: MsgService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.intData();
  }

  intData() {
    this.checkBookingMonthtable();
    this.intDateNow();
    this.motorcycleNumber();
  }

  intDateNow() {
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
  }

  checkBookingDateTable() {
    this.checkBookingMonth = true;
    this.serviceId = 12;
  }

  closeUpdateInfo() {
    this.router.navigate(["/tabs/home"]);
  }

  checkBookingMonthtable() {
    this.checkBookingDate = true;
    this.checkBookingMonth = false;
    this.serviceId = 10;
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
    this.serviceId = event.detail.value;
    if (this.serviceId == 12) {
      this.checkBookingDateTable();
    } else {
      this.checkBookingMonthtable();
      this.calculateBooking();
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
    if (this.startDate) {
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
          this.endDate = moment(getDateByMinuteEndDate).format(environment.formatDateTime);
        } else {
          let getDateByMinuteEndDate = new Date(getDateByMinute.getFullYear(), getDateByMinute.getMonth() + this.getMonth, getDateByMinute.getDate() + 1, date.getHours() + 1);
          this.roundingStartDate = moment(getDateByMinute).format(environment.formatDateTime);
          this.endDate = moment(getDateByMinuteEndDate).format(environment.formatDateTime);
        }
      } else if (minutesNow == 0) {
        let getDateByMinute = new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours());
        let getDateByMinuteEndDate = new Date(getDateByMinute.getFullYear(), getDateByMinute.getMonth() + this.getMonth, getDateByMinute.getDate(), date.getHours());
        this.roundingStartDate = moment(getDateByMinute).format(environment.formatDateTime);
        this.endDate = moment(getDateByMinuteEndDate).format(environment.formatDateTime);
      }
    } else {
      this.msgService.error("Vui lòng chọn ngày bắt đầu");
    }
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
    this.calculateBooking();
    this.priceVehicle = this.priceMotorcycleNumber;
    this.vehicleName = "Xe số";
  }

  acceleratorMotorcycle() {
    this.vehicleTypeId = 17;
    this.borderAcceleratorMotorcycle = this.borderCheck;
    this.borderMotorcycleNumber = this.borderNotCheck;
    this.borderClutchMotorcycle = this.borderNotCheck;
    this.calculateBooking();
    this.priceVehicle = this.priceAcceleratorMotorcycle;
    this.vehicleName = "Xe ga";
  }

  clutchMotorcycle() {
    this.vehicleTypeId = 18;
    this.borderClutchMotorcycle = this.borderCheck;
    this.borderAcceleratorMotorcycle = this.borderNotCheck;
    this.borderMotorcycleNumber = this.borderNotCheck;
    this.calculateBooking();
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
        if(price[i].vehicleTypeId != 16){
          this.borderClutchMotorcycle = this.borderNotCheck;
          this.borderAcceleratorMotorcycle = this.borderCheck;
          this.borderMotorcycleNumber = this.borderNotCheck;
          if(!this.priceVehicle){
            this.priceVehicle = this.priceAcceleratorMotorcycle;
          }
        }
      } else if (price[i].vehicleTypeId == 18) {
        this.priceClutchMotorcycle = price[i].price ? this.formatMoney(price[i].price) : 0;
        if(price[i].vehicleTypeId != 16){
          this.borderClutchMotorcycle = this.borderNotCheck;
          this.borderAcceleratorMotorcycle = this.borderNotCheck;
          this.borderMotorcycleNumber = this.borderCheck;
          if(!this.priceVehicle){
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
