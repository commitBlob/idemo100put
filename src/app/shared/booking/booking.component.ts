// Core
import {Component, OnInit} from '@angular/core';

// App specific

// Model
import { CalendarCellModel } from './calendar/calendar-cells.interface';

// Moment
import * as moment from 'moment/moment';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
})
export class BookingComponent implements OnInit {
  // {"apartmentId": 2, "startDate": {$gte: 1506812400000, $lte: 1509494399999}}
  // {"apartmentId": 2, "endDate": {$gte: 1506812400000,$lte: 1509494399999}}

  public calendarCells: CalendarCellModel[];
  public monthsArray: any = [];
  public days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
  public moment = moment;
  public fullGrid: any = [];
  public classGrid: any = [];
  public currentMonth = moment().format('YYYY-MM-DD');
  public previousMonth = moment().subtract(1, 'month').date(1).format('YYYY-MM-DD');
  public nextMonth = moment().add(1, 'month').date(1).format('YYYY-MM-DD');
  public elementDisabled = true;
  public montStartUNIX = moment().startOf('month').format('x');
  public montEndUNIX = moment().endOf('month').format('x');
  public componentLoading = true;

  // public dummy = [
  //   {
  //     cellNumber: 0,
  //     cellClasses: ['testclass', 'anotherclass'],
  //     disabled: true,
  //     booked: false,
  //     celldate: 'stringy'
  //   }, {
  //     cellNumber: 1,
  //     cellClasses: ['testclass1', 'anotherclass1'],
  //     disabled: true,
  //     booked: false,
  //     celldate: 'stringy2'
  //   }
  // ];

  constructor() {
    // this.calendarCells = this.dummy;
  }

  public ngOnInit() {
    this.buildGrid();
    // console.log(this.calendarCells);
    console.log('month start', moment(this.currentMonth).startOf('month').format('x'));
    console.log('month end', moment(this.currentMonth).endOf('month').format('x'));
    setTimeout(() => { this.componentLoading = false; }, 3000);
  }

  public buildGrid() {
    let currentYear = moment(this.currentMonth).format('YYYY');
    let daysInCurrentMonth = moment(this.currentMonth).daysInMonth();
    let momentMonth = moment(this.currentMonth).format('MM');
    let firstDay = Number(moment(currentYear + '-' + momentMonth + '-' + 1, 'YYYY-MM-DD').format('d'));
    let daysToPickFromPrevMonth;
    let monthStartDate = moment(this.currentMonth).startOf('month').format('YYYY-MM-DD');
    let monthEndDate = moment(this.currentMonth).endOf('month').format('YYYY-MM-DD');

    // resets
    this.fullGrid = [];
    this.classGrid = [];

    if ( firstDay === 0) {
      daysToPickFromPrevMonth = 7;
    }else {
      daysToPickFromPrevMonth = firstDay;
    }
    let daysToPickFromNextMonth = 42 - daysInCurrentMonth - daysToPickFromPrevMonth;
    let fillerStart = moment(monthStartDate).subtract(daysToPickFromPrevMonth, 'd').format('YYYY-MM-DD');
    let fillerEnd = moment(monthEndDate).add(daysToPickFromNextMonth, 'd').format('YYYY-MM-DD');

    let momentStart = moment(fillerStart).format('YYYY-MM-DD');
    let momentEnd = moment(fillerEnd).format('YYYY-MM-DD');

    while (momentStart <= momentEnd) {
      this.fullGrid.push(moment(momentStart).format('DD'));
      // ovdje se puni array
      if (momentStart >= monthStartDate && momentStart <= monthEndDate) {
        this.classGrid.push('active-month');
      } else {
        this.classGrid.push('inactive-month');
      }
      let newMoment = moment(momentStart).add(1, 'd').format('YYYY-MM-DD');
      momentStart = moment(newMoment).format('YYYY-MM-DD');
    }
  }

  public getPreviousMonth() {
    this.currentMonth = moment(this.currentMonth).subtract(1, 'month').date(1).format('YYYY-MM-DD');
    this.previousMonth = moment(this.previousMonth).subtract(1, 'month').date(1).format('YYYY-MM-DD');
    this.nextMonth = moment(this.currentMonth).add(1, 'month').format('YYYY-MM-DD');
    this.montStartUNIX =  moment(this.currentMonth).startOf('month').format('x');
    this.montEndUNIX =  moment(this.currentMonth).endOf('month').format('x');
    this.buildGrid();
  }

  public getNextMonth() {
    this.currentMonth = moment(this.currentMonth).add(1, 'month').date(1).format('YYYY-MM-DD');
    this.previousMonth = moment(this.previousMonth).add(1, 'month').date(1).format('YYYY-MM-DD');
    this.nextMonth = moment(this.currentMonth).add(1, 'month').format('YYYY-MM-DD');
    this.montStartUNIX =  moment(this.currentMonth).startOf('month').format('x');
    this.montEndUNIX =  moment(this.currentMonth).endOf('month').format('x');
    this.buildGrid();
  }

  public getToday() {
    this.currentMonth = moment().format('YYYY-MM-DD');
    this.previousMonth = moment().subtract(1, 'month').date(1).format('YYYY-MM-DD');
    this.nextMonth = moment().add(1, 'month').format('YYYY-MM-DD');
    this.montStartUNIX =  moment(this.currentMonth).startOf('month').format('x');
    this.montEndUNIX =  moment(this.currentMonth).endOf('month').format('x');
    this.buildGrid();
  }

  public calendarElementTrigger(event) {
    this.elementDisabled = true;
    if (event.srcElement.className === 'inactive-month') {
      this.elementDisabled = true;
      console.log('Element is disabled');
    } else {
      console.log('Element is enabled');
    }
    console.log(event);
  }

}
