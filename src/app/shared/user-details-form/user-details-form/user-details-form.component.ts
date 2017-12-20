// Core
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// App specific
import { BookingService } from '../../booking/booking.service';
import {PricelistService} from '../../pricelist/pricelist.service';

// Models
import { PricelistModel } from '../../pricelist/pricelist.interface';

// Moment
import * as moment from 'moment/moment';

@Component({
  templateUrl: './user-details-form.component.html',
})
export class UserDetailsFormComponent implements OnInit {

  from: string;
  to: string;
  apartmentShortName: number;
  guestsArray = [];
  guests: number;
  isLoading = true;
  arrivalArray = ['Not Sure', '00:01 - 01:00', '01:01 - 02:00',
    '02:01 - 03:00', '03:01 - 04:00', '04:01 - 05:00', '05:01 - 06:00',
    '06:01 - 07:00', '07:01 - 08:00', '08:01 - 09:00', '09:01 - 10:00',
    '10:01 - 11:00', '11:01 - 12:00', '12:01 - 13:00', '13:01 - 14:00',
    '14:01 - 15:00', '15:01 - 16:00', '16:01 - 17:00', '17:01 - 18:00',
    '18:01 - 19:00', '19:01 - 20:00', '20:01 - 21:00', '21:01 - 22:00',
    '22:01 - 23:00', '23:01 - 00:00'];
  timeSelected = '';
  pricelist: PricelistModel[];

  constructor(private route: ActivatedRoute,
              private bookingService: BookingService,
              private pricelistService: PricelistService
              ) {
    this.route.params.subscribe(params => {
      this.from = moment(parseInt(params.from)).format('DD-MM-YYYY');
      this.to = moment(parseInt(params.to)).format('DD-MM-YYYY');
      this.apartmentShortName = params.apartment;
    });
  }

  ngOnInit() {
    this.bookingService.getApartmentDetails(this.apartmentShortName).subscribe((response) => {
      this.generateGuestsArray(response[0].maxGuests);
    }, (error) => {
      console.log('Error', error);
    }, () => {
      this.isLoading = false;
    });
    this.pricelistService.getPricelist(this.apartmentShortName).subscribe((res) => {
      this.pricelist = res[0];
    });
  }

  generateGuestsArray(maxGuests) {
    for (let i = 1; i <= maxGuests; i++) {
      this.guestsArray.push(i);
    }
  }

  numberOfGuests(event) {
    this.guests = event.value;
  }

  timeSlot(event) {
    this.timeSelected = event.value;
  }
}
