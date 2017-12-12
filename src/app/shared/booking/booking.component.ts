// Core
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewContainerRef} from '@angular/core';

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

  calendarCells: CalendarCellModel[] = [];
  days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
  moment = moment;
  currentMonth = moment().format('YYYY-MM-DD');
  previousMonth = moment().subtract(1, 'month').date(1).format('YYYY-MM-DD');
  nextMonth = moment().add(1, 'month').date(1).format('YYYY-MM-DD');
  monthStartUNIX = moment().startOf('month').format('x');
  monthEndUNIX = moment().endOf('month').format('x');
  componentLoading = true;
  bookedEvents: any;
  tempEvents = [];

  gridDone = false;
  bookedCheck = false;

  bookingStart;
  bookingEnd;
  datesSelected = [];
  allowBooking = false;

  disablePreviousMonth = true;
  today = moment().format('YYYY-MM-DD');

  nextTriggered: boolean = false;
  selectionValid: boolean = false;

  private sub: any;

  // TODO: create interface and place all this apartment shit into object
  apartmentLink: string = '';
  apartmentId;
  apartmentShortName: string = '';
  apartmentName: string = '';

  constructor(private bookingService: BookingService,
              private dialogService: DialogsService,
              private viewContainerRef: ViewContainerRef,
              private route: ActivatedRoute) {
    this.sub = this.route.params.subscribe( params => this.apartmentShortName = params['apartmentName']);
  }

  public ngOnInit() {
    this.bookingService.getApartmentDetails(this.apartmentShortName).subscribe(
      (apartmentDetails) => {
        this.apartmentLink = apartmentDetails[0].bookingLink;
        this.apartmentId = apartmentDetails[0].apartmentId;
        this.apartmentName = apartmentDetails[0].apartmentName;
        this.apartmentShortName = apartmentDetails[0].apartmentShortName;
      }, (error) => {
        console.log('Error: ' + error);
        this.errorDialog('Error', error);
      }, () => {
        this.buildGrid();
        this.getBookedEvents();
      });
  }

  /**
   * Creates calendar grid
   */
  public buildGrid() {
    const currentYear = moment(this.currentMonth).format('YYYY');
    const daysInCurrentMonth = moment(this.currentMonth).daysInMonth();
    const momentMonth = moment(this.currentMonth).format('MM');
    const firstDay = Number(moment(currentYear + '-' + momentMonth + '-' + 1, 'YYYY-MM-DD').format('d'));
    let daysToPickFromPrevMonth;
    const monthStartDate = moment(this.currentMonth).startOf('month').format('YYYY-MM-DD');
    const monthEndDate = moment(this.currentMonth).endOf('month').format('YYYY-MM-DD');

    // resets
    this.calendarCells = [];

    firstDay === 0 ? daysToPickFromPrevMonth = 7 : daysToPickFromPrevMonth = firstDay;

    const daysToPickFromNextMonth = 42 - daysInCurrentMonth - daysToPickFromPrevMonth;
    const fillerStart = moment(monthStartDate).subtract(daysToPickFromPrevMonth, 'd').format('YYYY-MM-DD');
    const fillerEnd = moment(monthEndDate).add(daysToPickFromNextMonth, 'd').format('YYYY-MM-DD');

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
      const newMoment = moment(momentStart).add(1, 'd').format('YYYY-MM-DD');
      momentStart = moment(newMoment).format('YYYY-MM-DD');
    }
    this.gridDone = true;
  }

  /**
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

    this.nextTriggered = false;

    this.disablePreviousMonth = (moment(this.previousMonth).isBefore(this.today, 'month'));
  }

  /**
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

    this.nextTriggered = this.datesSelected.length === 1;

    this.disablePreviousMonth = (moment(this.previousMonth).isBefore(this.today, 'month'));
  }

  /**
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

    this.nextTriggered = false;

    this.disablePreviousMonth = (moment(this.previousMonth).isBefore(this.today, 'month'));
  }

  /**
   * Backend call, first to be triggered on calls as it takes longest to complete
   * fills bookedEvents array
   * fills tempEvents array
   * on complete sets componentLoading to false
   */
  public getBookedEvents() {
    // resets
    this.componentLoading = true;
    this.bookedEvents = [];

    this.bookingService.getBookedPeriods(this.apartmentId, this.monthStartUNIX, this.monthEndUNIX)
      .subscribe((res) => {
        this.bookedEvents = res;
      }, (error) => {
        console.log('Error: ', error);
        this.errorDialog('ERROR', error);
      }, () => {
        this.componentLoading = false;
        this.showBooked();
      });
  }

  /**
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

  /**
   * Check if selection is valid for booking
   * @param calendarCell
   */
  public calendarElementTrigger(calendarCell) {
    // check if selcted date is in the past
    if (moment(calendarCell.cellDate).isSameOrAfter(this.today, 'day')) {
      if (!calendarCell.disabled && !calendarCell.booked) {
        // check if user already made selection in order to reset it
        if (this.datesSelected.length === 0 || this.datesSelected.length >= 2) {
          // resets
          this.bookingStart = null;
          this.bookingEnd = null;
          this.datesSelected = [];
          this.allowBooking = false;
          this.selectionValid = false;
        }

        let daySelected, neighbour, beforeObject, afterObject;
        daySelected = calendarCell.cellDate;

        // check if neighbours are booked already
        afterObject = this.triggerBookedCheck(moment(daySelected).add(1, 'day').format('YYYY-MM-DD'));
        beforeObject = this.triggerBookedCheck(moment(daySelected).subtract(1, 'day').format('YYYY-MM-DD'));

        // if dayBefore and dayAfter are already booked, alert user
        if (beforeObject.booked && afterObject.booked) {
          this.messageDialog('One day booking!', 'Booking price for one night is £120.', daySelected);
          this.selectionValid = true;
        }

        // if before is booked, check right neighbour
        if (beforeObject.booked && !afterObject.booked) {
          // check right neighbour
          neighbour = this.triggerBookedCheck(moment(daySelected).add(2, 'day').format('YYYY-MM-DD'));
          // if neighbour is booked allow only 1 or 2 days booking
          if (neighbour.booked) {
            this.bookingDialog('Booking',
              `Please select one of the options bellow. <br /> Note: Price for one night stay is £120, for two nights is £110!`,
              daySelected,
              afterObject.cellDate);
          }
        }

        // if dayAfter is already booked, alert user that it is one night booking
        if (!beforeObject.booked && afterObject.booked && this.datesSelected.length !== 1) {
          this.bookingDialog('One day booking!', 'You selected only one night. Price for one night stay is £120!', daySelected);
        }

        // if start point is selected and end point is not the same day or the day after
        if (this.datesSelected.length === 1 && moment(daySelected).isSameOrAfter(this.datesSelected[0], 'day')) {
          this.datesSelected.push(daySelected);
          this.bookingEnd = daySelected;
          // second click
          // check if startDate === endDate
          if (this.bookingStart === this.bookingEnd) {
            this.bookingDialog('One day booking!', 'You selected only one night. Price for one night stay is £120!', daySelected);
          }

          // check for 2 nights booking
          if (this.bookingEnd === moment(this.bookingStart).add(1, 'day').format('YYYY-MM-DD')) {
            this.messageDialog('Two days booking!', 'You selected two nights stay. Price for two nights is £120!', this.datesSelected[0], daySelected);
          }

          const timestampStart = moment(this.bookingStart).format('x');
          const timestampEnd = moment(this.bookingEnd).format('x');
          // check with backend if there are any bookings in between selections
          this.bookingService.checkIfAvailable(this.apartmentId, timestampStart, timestampEnd).subscribe((response) => {
            if (response.length === 0) {
              console.log('Booking is OK!');
              this.selectionValid = true;
              // continue after all is good
            }else {
              this.errorDialog('Invalid Selection',
                'Date(s) in the range ' + moment(this.bookingStart).format('DD-MM-YYYY')
                + ' - ' + moment(this.bookingEnd).format('DD-MM-YYYY') + ' are already booked.');
              this.bookingStart = '';
              this.bookingEnd = '';
              this.selectionValid = false;
            }
          });
        }

        if (this.datesSelected.length === 0) {
          this.bookingStart = daySelected;
          this.datesSelected.push(daySelected);
          // check right neighbour
          this.triggerBookedCheck(afterObject);
        }


      }
      // don't do anything if calendarCell.disabled || calendarCell.booked
    } else {
      this.errorDialog('Invalid date selected!', 'Date is in the past! Please select another date.');
    }
  }

  /**
   * Triggered on each cell click
   * Loops through calendarCells array and checks if dateToCheck param equals one of object
   * @param {String} dateToCheck
   * @return {Object} cellObject
   */
  public triggerBookedCheck(dateToCheck) {
    let cellObject = '';
    this.calendarCells.forEach((value: any) => {
      if (dateToCheck === value.cellDate) {
        cellObject = value;
      }
    });
    return cellObject;
  }

  /**
   * Calls dialogService.bookings method which returns observable result depending on button clicked
   * @param {String} title
   * @param {String} message
   * @param {String} [start] - booking start date
   * @param {String} [end] - booking end date
   */
  public bookingDialog(title: string, message: string, start?, end?) {
    if (!end) {
      this.dialogService.bookings(title, message, this.viewContainerRef, true).subscribe( result => {
        if (result === 'ok') {
          // if user accepts one night booking set start, end, and push to the array
          this.bookingStart = start;
          this.bookingEnd = start;
          this.datesSelected.push(start);
        }else {
          this.bookingStart = '';
          this.datesSelected = [];
        }
      });
    } else {
      this.dialogService.bookings(title, message, this.viewContainerRef).subscribe( result => {
        if (result === 1) {
          this.bookingStart = start;
          this.bookingEnd = start;
          this.datesSelected.push(start);
          this.selectionValid = true;
        }

        if (result === 2) {
          this.bookingStart = start;
          this.bookingEnd = end;
          this.datesSelected.push(end);
          this.selectionValid = true;
        }

        if (result === 'closed') {
          this.bookingStart = '';
          this.bookingEnd = '';
          this.datesSelected = [];
          this.selectionValid = false;
        }
      });
    }
  }

  /**
   * Calls dialogService.confirm method which returns observable result depending on button clicked
   * @param {String} title
   * @param {String} message
   * @param {String} [start] - booking start date
   * @param {String} [end] - booking end date
   */
  public messageDialog(title: string, message: string, start?, end?) {
    this.dialogService.confirm(title, message, this.viewContainerRef).subscribe(result => {
      if (result) {
        this.bookingStart = start;
        if (!end) {
          // if there is no end parameter and result is true make one night booking and add it to the datesSelected array
          this.bookingEnd = start;
          this.datesSelected.push(start);
          this.selectionValid = true;
        } else {
          this.bookingEnd = end;
          this.datesSelected.push(end);
          this.selectionValid = true;
        }
      }else {
        // if user selects close button, remove start date and empty datesSelected array
        this.bookingStart = '';
        this.datesSelected = [];
        this.selectionValid = false;
      }
    });
  }

  /**
   * Pops up error dialog to alert user.
   * @param {String} title
   * @param {String} message
   */
  public errorDialog(title: string, message: string) {
    this.dialogService
      .confirm(title, message, this.viewContainerRef);
  }

  /**
   * Triggered on continue click and subscribes to the output.
   * If output is booking, redirects to booking.com
   * if output is paypal proceeds with payment
   */
  public selectionDialog() {
    const start = moment(this.bookingStart);
    const end = moment(this.bookingEnd);
    const bodyObject = {
      startDate: this.bookingStart,
      endDate: this.bookingEnd,
      pricePerNight: 100,
      nights: end.diff(start, 'days') + 1,
    };

    this.dialogService.selection(this.apartmentName + ' Apartment', bodyObject, this.viewContainerRef).subscribe(output => {
      console.log('gimme output: ', output);
    });
  }
}
