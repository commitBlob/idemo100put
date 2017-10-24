// Core
import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';

// App specific
import { BookingService } from './booking.service';

// Model
import { CalendarCellModel } from './calendar/calendar-cells.interface';

// Moment
import * as moment from 'moment/moment';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
})
export class BookingComponent implements OnInit {

  public calendarCells: CalendarCellModel[] = [];
  public monthsArray: any = [];
  public days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
  public moment = moment;
  public fullGrid: any = [];
  public gridDates: any = [];
  public classGrid: any = [];
  public currentMonth = moment().format('YYYY-MM-DD');
  public previousMonth = moment().subtract(1, 'month').date(1).format('YYYY-MM-DD');
  public nextMonth = moment().add(1, 'month').date(1).format('YYYY-MM-DD');
  public elementDisabled = true;
  public monthStartUNIX = moment().startOf('month').format('x');
  public monthEndUNIX = moment().endOf('month').format('x');
  public componentLoading = true;
  public apartmentId = 2;
  public bookedEvents = [];
  public tempEvents = [];
  public cellNumbers = [];

  public doneBuilding = false;


  constructor(private _bookingService: BookingService) {
  }

  public ngOnInit() {
    this.buildGrid();
    this.getBookedEvents();
  }

  /*
   * Creates calendar grid
   * Populates classGrid array
   * Populates gridDates array
   */
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
    this.gridDates = [];

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
      this.gridDates.push(moment(momentStart).format('YYYY-MM-DD'));
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

  /*
   * Calendar CORE
   */
  public getPreviousMonth() {
    this.currentMonth = moment(this.currentMonth).subtract(1, 'month').date(1).format('YYYY-MM-DD');
    this.previousMonth = moment(this.previousMonth).subtract(1, 'month').date(1).format('YYYY-MM-DD');
    this.nextMonth = moment(this.currentMonth).add(1, 'month').format('YYYY-MM-DD');
    this.monthStartUNIX =  moment(this.currentMonth).startOf('month').format('x');
    this.monthEndUNIX =  moment(this.currentMonth).endOf('month').format('x');
    this.buildGrid();
  }

  /*
   * Calendar CORE
   */
  public getNextMonth() {
    this.currentMonth = moment(this.currentMonth).add(1, 'month').date(1).format('YYYY-MM-DD');
    this.previousMonth = moment(this.previousMonth).add(1, 'month').date(1).format('YYYY-MM-DD');
    this.nextMonth = moment(this.currentMonth).add(1, 'month').format('YYYY-MM-DD');
    this.monthStartUNIX =  moment(this.currentMonth).startOf('month').format('x');
    this.monthEndUNIX =  moment(this.currentMonth).endOf('month').format('x');
    this.buildGrid();
  }

  /*
   * Calendar CORE
   */
  public getToday() {
    this.currentMonth = moment().format('YYYY-MM-DD');
    this.previousMonth = moment().subtract(1, 'month').date(1).format('YYYY-MM-DD');
    this.nextMonth = moment().add(1, 'month').format('YYYY-MM-DD');
    this.monthStartUNIX =  moment(this.currentMonth).startOf('month').format('x');
    this.monthEndUNIX =  moment(this.currentMonth).endOf('month').format('x');
    this.buildGrid();
  }

  /*
   * Backend call, first to be triggered on calls as it takes longest to complete
   * fills bookedEvents array
   * fills tempEvents array
   * on complete sets componentLoading to false
   */
  public getBookedEvents() {
    // resets
    this.componentLoading = true;
    this.tempEvents = [];
    this.bookedEvents = [];

    // backend call to get all booked events from the database
    Observable.forkJoin(
      this._bookingService.getStartDates(this.apartmentId, this.monthStartUNIX, this.monthEndUNIX),
      this._bookingService.getEndDates(this.apartmentId, this.monthStartUNIX, this.monthEndUNIX)
    ).subscribe( (res) => {
      res[0].forEach((value: any) => {
        this.tempEvents.push(value);
      });
      res[1].forEach((value: any) => {
        this.tempEvents.push(value);
      });
    }, (error) => {
      console.log(error);
    }, () => {
      this.bookedEvents = this.tempEvents.filter((set => f => !set.has(f._id) && set.add(f._id))(new Set));
      this.componentLoading = false;
    });
  }

  /*
   * Field Click triggers
   * TODO: create logic
   */
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
