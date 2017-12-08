// Core
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

// Model
import { BookedPeriodsModel } from './booked-periods.interface';

// Moment
import * as moment from 'moment/moment';

@Injectable()
export class BookingService {
  constructor( private  _http: Http) {}

  public getStartDates(apartmentId, startDate, endDate): Observable<BookedPeriodsModel[]> {
    return this._http.get('./api/startDates/' + apartmentId + '/' + startDate + '/' + endDate)
      .map((res: Response) => <BookedPeriodsModel>res.json())
      .catch(this.handleError);
  }

  public getEndDates(apartmentId, startDate, endDate): Observable<BookedPeriodsModel[]> {
    return this._http.get('./api/endDates/' + apartmentId + '/' + startDate + '/' + endDate)
      .map((res: Response) => <BookedPeriodsModel> res.json())
      .catch(this.handleError);
  }

  public checkIfAvailable(apartmentId, startDate, endDate): Observable<BookedPeriodsModel[]> {
    return this._http.get('./api/checkBooking/' + apartmentId + '/' + startDate + '/' + endDate)
      .map((res: Response) => <BookedPeriodsModel> res.json())
      .catch(this.handleError);
  }

  public checkDatesBetween(startDate: string, endDate: string, calendarArray): Observable<boolean> {
    let selectionRange = [];
    let selectionStart = startDate;
    let selectionEnd = endDate;
    let canBook = false;
    while (selectionStart <= selectionEnd) {
      selectionRange.push(selectionStart);
      selectionStart = moment(selectionStart).add(1, 'day').format('YYYY-MM-DD');
    }
    let i = 0;
    let bookedCounter = 0;
    for (let j = 0; j < selectionRange.length; j++) {
      calendarArray.forEach((value: any, key: any) => {
        if (selectionRange[i] === value.cellDate && !value.booked) {
          bookedCounter++;
        }
      });
      i++;
    }

    console.log(bookedCounter, 'bookedCounter');
    console.log(selectionRange.length, 'selectionRange.length');
    if (bookedCounter === selectionRange.length) {
      canBook = true;
    }
    return Observable.of(canBook);
  }

  private handleError(error: any) {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
