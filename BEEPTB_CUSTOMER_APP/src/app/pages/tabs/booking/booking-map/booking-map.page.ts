import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { ModalController, NavController, NavParams, Platform } from '@ionic/angular';
import { Geoposition } from '@ionic-native/geolocation/ngx';
import { BookingCompletedPage } from '../booking-completed/booking-completed.page';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { CalculateModel } from 'src/app/shared/models/calculate.model';
import { GMapHelper } from 'src/app/shared/infrastructure/gmap.helper';
import { DistrictService } from 'src/app/shared/services/apis/district.service';
import { MsgService } from 'src/app/shared/services/locals/msg-message.service';
import { FilterModel } from 'src/app/shared/models/filterModel.model';

@Component({
  selector: 'app-booking-map',
  templateUrl: './booking-map.page.html'
})

export class BookingMapPage implements OnInit {

  @ViewChild('placesRef') placesRef: GooglePlaceDirective;
  options = {
    types: [],
    componentRestrictions: { country: 'VN' }
  };
  currentPos: Geoposition;
  title: string = 'My first AGM project';
  lat: any;
  lng: any;
  height = 0;
  inputAddress: any;
  geocoder: google.maps.Geocoder = new google.maps.Geocoder();
  adr_address: string;
  dataBookingModel: CalculateModel = new CalculateModel();
  startMonths: any;
  priceVehicle: number;
  vehicleName: string;
  filterModel: FilterModel = new FilterModel();
  checkLoneBooking: boolean;
  adress: string;

  constructor(
    private modalController: ModalController,
    public navCtrl: NavController,
    public platform: Platform,
    public zone: NgZone,
    private navParams: NavParams,
    private districtService: DistrictService,
    private msgService: MsgService,
  ) {
    this.height = platform.height() - 56;
    this.dataBookingModel = this.navParams.get('dataBoking');
    this.startMonths = this.navParams.get('month');
    this.priceVehicle = this.navParams.get('priceVehicle');
    this.vehicleName = this.navParams.get('vehicleName');
    this.checkLoneBooking = this.navParams.get('checkLoneBooking');
    this.adress = this.navParams.get('adress');
  }

  ngOnInit() {
    this.intData();

  }
  intData() {
    this.setCurrentPosition();
    if (this.checkLoneBooking) {
      this.inputAddress = this.adress;
    } else {
      this.inputAddress = null;
    }
  }

  setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      });
    }
  }

  closeUpdateInfo() {
    this.modalController.dismiss();
  }

  async bookingMap() {
    if (this.inputAddress) {
      this.closeUpdateInfo();
      //open modal
      const modal = await this.modalController.create({
        component: BookingCompletedPage,
        componentProps: {
          "address": this.inputAddress,
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
    } else {
      this.msgService.error("Vui lòng chọn khu vực phụ vụ");
    }
  }

  async handleAddressChange(address: Address, inputAddress): Promise<any> {
    this.selectedAddressItem(address, inputAddress);
  }

  selectedAddressItem(prediction, inputAddress): void {
    if (inputAddress.id === 'address') {
      this.inputAddress = prediction.formatted_address;
    }
    this.geocoder.geocode({ placeId: prediction.place_id }, (resultsPlaceId, statusPlaceId) => {
      if (statusPlaceId === 'OK' && resultsPlaceId[0]) {
        const latlng = resultsPlaceId[0].geometry.location;
        this.geocoder.geocode({ placeId: resultsPlaceId[0].place_id }, (resultsLatLng, statusLatLng) => {
          if (statusLatLng === 'OK' && resultsLatLng[0]) {
            this.loadInitMap(resultsLatLng, inputAddress);
          }
        });
      }
    });
  }

  async loadInitMap(resultsLatLng, inputAddress): Promise<any> {
    const results = resultsLatLng[0];
    this.lat = null;
    this.lng = null;
    this.setCurrentPositionOutPut(results.geometry.location.lat(), results.geometry.location.lng())
    let provinceName; let districtName;
    results.address_components.map(element => {
      //
      if (element.types.indexOf(GMapHelper.ADMINISTRATIVE_AREA_LEVEL_1) !== -1) {
        provinceName = element.long_name;
      } else if (element.types.indexOf(GMapHelper.ADMINISTRATIVE_AREA_LEVEL_2) !== -1) {
        districtName = element.long_name;
      } else if (element.types.indexOf(GMapHelper.LOCALITY) !== -1
        && element.types.indexOf(GMapHelper.ADMINISTRATIVE_AREA_LEVEL_2) === -1) {
        districtName = element.long_name;
      }
    });

    if (inputAddress.id === 'address') {
      this.zone.run(async () => {
        if (districtName == "Thành phố Đà Lạt" || districtName == "Dalat") {
          this.filterModel.PageNumber = 1;
          this.filterModel.PageSize = 1;
          this.filterModel.SearchText = "Đà Lạt"
          const res = await this.districtService.getDistrictByNameDaLat(this.filterModel);
          if (res.data.length == 0 || res.data[0].id != 1215) {
            this.checkDistrictDaLat();
          }
        } else {
          this.checkDistrictDaLat();
        }
      });
    }
  }

  checkDistrictDaLat() {
    this.inputAddress = null;
    this.lat = null;
    this.lng = null;
    this.msgService.error("Vui lòng chọn khu vực phụ vụ Đà lạt");
    return;
  }

  setCurrentPositionOutPut(itemLat, itemLng) {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = itemLat;
        this.lng = itemLng;
      });
    }
  }
}
