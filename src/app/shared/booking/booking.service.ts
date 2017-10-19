// Core
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

// Model
import { BookedPeriodsModel } from './booked-periods.interface';

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

  private handleError(error: any) {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
