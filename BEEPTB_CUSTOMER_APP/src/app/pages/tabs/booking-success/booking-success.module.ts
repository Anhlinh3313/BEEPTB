import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { BookingSuccessPageRoutingModule } from './booking-success-routing.module';
import { BookingSuccessPage } from './booking-success.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    BookingSuccessPageRoutingModule,
  ],
  declarations: [BookingSuccessPage]
})
export class BookingSuccessPageModule { }
