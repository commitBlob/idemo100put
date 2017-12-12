// Core
import { Component, OnInit, Input } from '@angular/core';

// Moment
import * as moment from 'moment/moment';

@Component({
  selector: 'booking-selection',
  templateUrl: './selection-template.html'
})
export class SelectionTemplate implements OnInit {
  @Input() selection;

  totalPrice: number;
  startDate: string;
  endDate: string;

  ngOnInit() {
    this.startDate = moment(this.selection.startDate).format('DD-MM-YYYY');
    this.endDate = moment(this.selection.endDate).format('DD-MM-YYYY');
    this.totalPrice = this.selection.pricePerNight * this.selection.nights;
  }
}
