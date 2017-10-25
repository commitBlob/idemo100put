// Core
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';

// App specific
import { BookingService } from './booking.service';
import { DialogsService } from '../dialogs/dialogs.service';

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
  public days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
  public moment = moment;
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

  public gridDone = false;
  public bookedCheck = false;

  public bookingStart;
  public bookingEnd;


  constructor(private _bookingService: BookingService,
              private _dialogService: DialogsService,
              private _viewContainerRef: ViewContainerRef) {
  }

  public ngOnInit() {
    this.buildGrid();
    this.getBookedEvents();
  }

  /*
   * Creates calendar grid
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
    this.calendarCells = [];

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
      if (momentStart >= monthStartDate && momentStart <= monthEndDate) {
        this.calendarCells.push({
          cellClasses: ['active-month'],
          disabled: false,
          booked: false,
          cellDate: momentStart,
          monthDay: moment(momentStart).format('DD')});
      } else {
        this.calendarCells.push({
          cellClasses: ['inactive-month'],
          disabled: true,
          booked: false,
          cellDate: momentStart,
          monthDay: moment(momentStart).format('DD')});
      }
      let newMoment = moment(momentStart).add(1, 'd').format('YYYY-MM-DD');
      momentStart = moment(newMoment).format('YYYY-MM-DD');
    }
    this.gridDone = true;
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
    this.getBookedEvents();
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
    this.getBookedEvents();
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
    this.getBookedEvents();
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
      this.showBooked();
    });
  }

  /*
   * Looping through booked events and adding appropriate classes and booleans depending on bookings
   * When looping is done set bookedCheck to true
   */
  public showBooked() {
    let i = 0;
    for (let j = 0; j < this.bookedEvents.length; j++) {
      // format start and end date
      this.bookedEvents[i].startDate = moment(this.bookedEvents[i].startDate).format('YYYY-MM-DD');
      this.bookedEvents[i].endDate = moment(this.bookedEvents[i].endDate).format('YYYY-MM-DD');
      // loop through all 42 cells and check if bookedEvent values are in the range
      this.calendarCells.forEach((v: any, k: any) => {
        // if value is in the range add class 'booking-closed and update booked value to true
        if ( moment(this.calendarCells[k].cellDate).isBetween(this.bookedEvents[i].startDate,  this.bookedEvents[i].endDate, null, '[]')) {
          this.calendarCells[k].cellClasses[1] = 'booking-closed';
          this.calendarCells[k].booked = true;
        }

        // if there is still one class add another as it means this date is still available for booking
        if (this.calendarCells[k].cellClasses.length === 1) {
          this.calendarCells[k].cellClasses[1] = 'booking-open';
        }
      });
      i++;
    }
    this.bookedCheck = true;
  }

  /*
   * Field Click triggers
   * TODO: create logic
   * TODO: on click check neighbour cells and if both have booking-closed class trigger alert saying that booking price is 50% more
   * TODO: if only one side has booking-closed, take neighbour of the class that doesn't have
   * if it's neighbour has booking-closed class let users know that price is still 50% more as it is 2 nights booking
   */
  public calendarElementTrigger(event, element) {
    if (!element.disabled && !element.booked) {
      // resets
      this.bookingStart = null;
      this.bookingEnd = null;

      let daySelected, neighbour, beforeObject, afterObject;
      daySelected = element.cellDate;
      console.log(daySelected, 'day selected');
      beforeObject = this.triggerBookedCheck(moment(daySelected).add(1, 'day').format('YYYY-MM-DD'));
      afterObject = this.triggerBookedCheck(moment(daySelected).subtract(1, 'day').format('YYYY-MM-DD'));

      // if dayBefore and dayAfter are already booked, alert user
      if (beforeObject.booked && afterObject.booked) {
       this.messageDialog('One day booking!', 'Booking price for one night is £120.', daySelected);
      }

      if (beforeObject.booked && !afterObject.booked) {
        console.log('after is booked!');
        this.bookingDialog('Testy', 'Testy for dates when booking for next day is unavailable');
      }

      if (!beforeObject.booked && afterObject.booked) {
        console.log('before is booked!');
      }

      // element is in the current month and is not booked, check neighbours
    }

    console.log(event);
  }

  public triggerBookedCheck(dateToCheck) {
    let cellObject = '';
    this.calendarCells.forEach((value: any) => {
      if (dateToCheck === value.cellDate) {
        cellObject = value;
      }
    });
    return cellObject;
  }

  public bookingDialog(title, message, start?, end?) {
    this._dialogService.bookings(title, message, this._viewContainerRef).subscribe( result => {
      console.log('returned', result);
    });
  }

  public messageDialog(title: string, message: string, start?, end?) {
    this._dialogService.confirm(title, message, this._viewContainerRef).subscribe(result => {
      if (result) {
        this.bookingStart = start;
        if (!end) {
          this.bookingEnd = start;
        } else {
          this.bookingEnd = end;
        }
      }
    });
  }

}
