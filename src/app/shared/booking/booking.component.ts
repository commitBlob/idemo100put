// Core
import {Component, OnInit} from '@angular/core';

// App specific

// Moment
import * as moment from 'moment/moment';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
})
export class BookingComponent implements OnInit {
  public numberOfDays;
  public rows = 6;
  public year = 2017;
  public monthsArray: any = [];
  public days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
  public moment = moment;

  constructor() {
  }

  public ngOnInit() {

    for (let j = 1; j <= 12; j++) {
      let days = moment(this.year + '-' + j, 'YYYY-MM').daysInMonth();
      this.monthsArray.push({month: j, days, daysArray: new Array(days)});
    }

    let daysNow = moment().daysInMonth();
    let gimmeMonth =  moment().format('MM');
    let firstDay = Number(moment(this.year + '-' + gimmeMonth + '-' + 1, 'YYYY-MM-DD').format('d'));
    let previousMonthDays = this.monthsArray[Number(moment().format('MM')) - 2].days;
    let previousDays = previousMonthDays - firstDay;
    let difference = previousMonthDays - previousDays; // this number is value how much spaces I need to go back in the calendar (0 = Sun, 1 = Mon ...)
    let fill42 = 42 - difference - daysNow;
    console.log('first day', firstDay);
    console.log('previous month days', previousMonthDays);
    console.log('previous days minus first day', previousDays);
    console.log('this many days I need to print from the previous month', difference);
    console.log('this is the remainder needed to fill 42 cells', fill42);

    //
    // if (firstDay !== 0 ) {
    //
    // }

    // for (let p = previousMonthDays; p <= previousDays; p--) {
    //
    // }



  }
}
