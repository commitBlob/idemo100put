// Core
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Validators, FormBuilder, FormControl, FormGroup} from '@angular/forms';

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

  from: any;
  to: any;
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

  // tslint:disable-next-line
  public emailRegex = /^(([^<>()\[\]\\.,;:\s@']+(\.[^<>()\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


  // form
  firstName = new FormControl('', [
    Validators.required,
    Validators.minLength(2)
  ]);

  lastName = new FormControl('', [
    Validators.required,
    Validators.minLength(2)
  ]);

  email = new FormControl('', [
    Validators.required,
    Validators.pattern(this.emailRegex)
  ]);

  guestCount = new FormControl('', [
    Validators.required
  ]);

  arrivalTime = new FormControl('', [
    Validators.required
  ]);

  additionalMessage = new FormControl('');

  detailsForm: FormGroup = this.builder.group({
    firstName : this.firstName,
    lastName: this.lastName,
    email: this.email,
    guestCount: this.guestCount,
    arrival: this.arrivalTime,
    message: this.additionalMessage
  });

  nights: number;

  constructor(private route: ActivatedRoute,
              private bookingService: BookingService,
              private pricelistService: PricelistService,
              private builder: FormBuilder
              ) {
    this.route.params.subscribe(params => {
      this.from = moment(parseInt(params.from));
      this.to = moment(parseInt(params.to));
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
    this.nights = this.calculateDays();
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

  formSubmit() {
    console.log(this.detailsForm.value, 'details form');
  }

  calculateDays() {
    return this.to.diff(this.from, 'days') + 1;
  }

  getPrice() {

  }
}
