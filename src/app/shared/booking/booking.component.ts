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

  public year = 2017;
  public monthsArray: any = [];
  public days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
  public moment = moment;
  public fullGrid: any = [];
  public currentMonth = moment().format('YYYY-MM-DD');
  public previousMonth = moment().subtract(1, 'month').date(1).format('YYYY-MM-DD');
  public nextMonth = moment().add(1, 'month').date(1).format('YYYY-MM-DD');

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
    if (fill42 >= 7) {
      difference = 7;
      fill42 -= difference;
    }

    let startofMonth = moment().startOf('month').format('YYYY-MM-DD');

    // console.log('What is months array? ', this.monthsArray);
    //
    // console.log('-------------------------------');
    // console.log('days in current month', daysNow);
    // console.log('previous month days', previousMonthDays);
    // console.log('previous days minus first day', previousDays);
    // console.log('this many days I need to print from the previous month', difference);
    // console.log('this is the remainder needed to fill 42 cells', fill42);
    // console.log('do I need to fill completly first week? fill42 > 7', difference);
    // console.log('Sum should be 42 = ', daysNow , '+', difference, '+', fill42);
    // console.log('-------------------------------');
    // console.log('Start Month ', startofMonth);
    // console.log('7 days ago,', moment(startofMonth).subtract(7, 'd').format('YYYY-MM-DD'));

    var tempHolder = difference;

    let fillerStart = moment(startofMonth).subtract(tempHolder, 'd').format('YYYY-MM-DD');
    let fillerEnd = moment(startofMonth).add((fill42 + daysNow), 'd').format('YYYY-MM-DD');

    // console.log('starting point ', fillerStart);
    // console.log('end point', fillerEnd);

    var start = new Date(fillerStart);
    var end = new Date(fillerEnd);

    while (start < end) {
      this.fullGrid.push(moment(start).format('DD'));
      let newDate = start.setDate(start.getDate() + 1);
      start = new Date(newDate);
    }

    // console.log(this.fullGrid, 'full array?');

    let previousMonth = moment().subtract(1, 'month').date(1).format('YYYY-MM-DD');
    let nextMonth = moment().add(1, 'month').date(1).format('YYYY-MM-DD');

    // console.log('Previous month: ', previousMonth);
    // console.log('Next month: ', nextMonth);
  }

  public getPreviousMonth() {
    this.currentMonth = moment(this.currentMonth).subtract(1, 'month').date(1).format('YYYY-MM-DD');
    this.previousMonth = moment(this.previousMonth).subtract(1, 'month').date(1).format('YYYY-MM-DD');
    this.nextMonth = moment(this.currentMonth).add(1, 'month').format('YYYY-MM-DD');
  }

  public getNextMonth() {
    this.currentMonth = moment(this.currentMonth).add(1, 'month').date(1).format('YYYY-MM-DD');
    this.previousMonth = moment(this.previousMonth).add(1, 'month').date(1).format('YYYY-MM-DD');
    this.nextMonth = moment(this.currentMonth).add(1, 'month').format('YYYY-MM-DD');
  }

  public getToday() {
    this.currentMonth = moment().format('YYYY-MM-DD');
    this.previousMonth = moment().subtract(1, 'month').date(1).format('YYYY-MM-DD');
    this.nextMonth = moment().add(1, 'month').format('YYYY-MM-DD');
  }

}
