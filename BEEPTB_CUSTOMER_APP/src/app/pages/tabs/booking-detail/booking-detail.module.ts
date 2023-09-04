import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { StarRatingModule } from 'ionic5-star-rating';
import { BookingDetailRoutingModule } from './booking-detail-routing.module';
import { BookingDetailPage } from './booking-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    BookingDetailRoutingModule,
    StarRatingModule,
  ],
  declarations: [BookingDetailPage]
})
export class BookingDetailPageModule { }
