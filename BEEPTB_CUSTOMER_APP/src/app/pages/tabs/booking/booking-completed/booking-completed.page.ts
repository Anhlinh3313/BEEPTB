import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NavParams } from '@ionic/angular';
import { CalculateModel } from 'src/app/shared/models/calculate.model';
import * as moment from "moment";
import { environment } from 'src/environments/environment';
import { MsgService } from 'src/app/shared/services/locals/msg-message.service';
import { BookingService } from 'src/app/shared/services/apis/booking.service';
import { UserModel } from 'src/app/shared/models/user.model';
import { LocalStorgeService } from 'src/app/shared/services/locals/local-storge.service';
import { CustomerService } from 'src/app/shared/services/apis/customer.service';
import { BookingMapPage } from '../booking-map/booking-map.page';
import { reduce } from 'rxjs/operators';

@Component({
  selector: 'app-booking-completed',
  templateUrl: './booking-completed.page.html'
})
export class BookingCompletedPage implements OnInit {

  dataBookingModel: CalculateModel = new CalculateModel();
  serviceId: number;
  startDate: any;
  endDate: any;
  startMonths: any;
  vehicleTypeId: number;
  priceTable: any;
  checkBookingDate: boolean;
  checkBookingMonth: boolean;
  getMonth: any;
  address: any;
  createBooking: CalculateModel = new CalculateModel();
  user: UserModel = new UserModel();
  priceVehicle: number;
  vehicleName: string;

  constructor(
    private modalController: ModalController,
    private router: Router,
    private msgService: MsgService,
    private navParams: NavParams,
    private bookingService: BookingService,
    private localStorageService: LocalStorgeService,
    private customerService: CustomerService,
  ) {
    this.dataBookingModel = this.navParams.get('dataBoking');
    this.startMonths = this.navParams.get('month');
    this.address = this.navParams.get('address');
    this.priceVehicle = this.navParams.get('priceVehicle');
    this.vehicleName = this.navParams.get('vehicleName');
  }

  ngOnInit() {
    this.intData();
  }

  intData() {
    this.serviceId = this.dataBookingModel.serviceId;
    this.startDate = this.dataBookingModel.startDate;
    this.endDate = this.dataBookingModel.endDate;
    this.vehicleTypeId = this.dataBookingModel.vehicleTypeId;
    this.priceTable = this.priceVehicle;
    this.checkBookingMonthTable();
    this.getCurrentUser();
  }

  async getCurrentUser() {
    let Id = await this.localStorageService.get("userId")
    let res = await this.customerService.getCurrentCustomer(Id);
    if (res.isSuccess) {
      this.user = res.data;
    }
  }

  checkBookingDateTable() {
    this.checkBookingMonth = true;
    this.serviceId = 12;
  }

  checkBookingMonthTable() {
    if (this.serviceId == 10) {
      this.checkBookingDate = true;
      this.checkBookingMonth = false;
    } else {
      this.checkBookingDate = false;
      this.checkBookingMonth = true;
    }
  }

  closeUpdateInfo() {
    this.modalController.dismiss();
    this.bookingMap();
  }

  async bookingMap() {
    //open modal
    const modal = await this.modalController.create({
      component: BookingMapPage,
      componentProps: {
        "dataBoking": this.dataBookingModel,
        "month": this.startMonths,
        "priceVehicle": this.priceVehicle,
        "vehicleName": this.vehicleName,
      }
    });
    // close modal
    modal.onDidDismiss().then((res) => {

    });
    return await modal.present();
  }

  async bookingsSuccess() {
    this.createBooking.serviceId = this.serviceId;
    this.createBooking.startDate = this.startDate;
    this.createBooking.endDate = this.endDate;
    this.createBooking.vehicleTypeId = this.vehicleTypeId;
    this.createBooking.customerId = this.user.id;
    this.createBooking.address = this.address;
    let res = await this.bookingService.createBooking(this.createBooking);
    if (res.data) {
      this.msgService.success("Đặt xe thành công");
      this.modalController.dismiss();
      //let a = 
      this.router.navigateByUrl("/tabs/booking-success" + "/?bookingId=" + res.data.id);
    } else {
      this.msgService.error(res.message || "Đặt xe không thành công");
    }
  }

}
