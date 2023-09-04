import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { BookingCompletedPage } from './booking-completed/booking-completed.page';
import { BookingMapPage } from './booking-map/booking-map.page';
import { BookingRoutingModule } from './booking-routing.module';
import { BookingPage } from './booking.page';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { BackgroundGeolocation } from '@ionic-native/background-geolocation/ngx';
import { AgmCoreModule } from '@agm/core';
import { environment } from 'src/environments/environment';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    BookingRoutingModule,
    GooglePlaceModule,
    AgmCoreModule.forRoot({
      apiKey: environment.keyGoogleMap,
      libraries: ["places"]
    })
  ],
  declarations: [
    BookingMapPage,
    BookingCompletedPage,
    BookingPage
  ],
  providers: [
    Geolocation,
    BackgroundGeolocation,
    
  ]
})
export class BookingPageModule { }
