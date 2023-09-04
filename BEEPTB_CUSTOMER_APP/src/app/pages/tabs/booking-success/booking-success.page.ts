import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-booking-success',
  templateUrl: './booking-success.page.html',
})
export class BookingSuccessPage implements OnInit {

  bookingId: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params) {
        this.bookingId = JSON.parse(params.bookingId);
      }
    });
  }

  home() {
    this.router.navigate(["/tabs/home"]);
  }

  bookingDetail() {
    this.router.navigateByUrl("/tabs/booking-detail" + "/?bookingId=" + this.bookingId);
  }
}
