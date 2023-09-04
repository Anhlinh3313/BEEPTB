import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { BackgroundGeolocation } from '@ionic-native/background-geolocation/ngx';
import { CloneBookingRoutingModule } from './clone-booking-routing.module';
import { BookingMapPage } from '../booking/booking-map/booking-map.page';
import { BookingCompletedPage } from '../booking/booking-completed/booking-completed.page';
import { CloneBookingPage } from './clone-booking.page';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { AgmCoreModule } from '@agm/core';
import { environment } from 'src/environments/environment';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    CloneBookingRoutingModule,
    GooglePlaceModule,
    AgmCoreModule.forRoot({
      apiKey: environment.keyGoogleMap,
      libraries: ["places"]
    })
  ],
  declarations: [
    CloneBookingPage,
    BookingMapPage,
    BookingCompletedPage,
  ],
  providers: [
    Geolocation,
    BackgroundGeolocation,
  ]
})
export class CloneBookingPageModule { }
