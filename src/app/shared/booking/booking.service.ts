// Core
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

// Model
import { BookedPeriodsModel } from './booked-periods.interface';


@Injectable()
export class BookingService {
  constructor( private http: Http) {}

  public checkIfAvailable(apartmentId, startDate, endDate): Observable<BookedPeriodsModel[]> {
    return this.http.get('./api/checkBooking/' + apartmentId + '/' + startDate + '/' + endDate)
      .map((res: Response) => <BookedPeriodsModel> res.json())
      .catch(this.handleError);
  }

  public getApartmentDetails(apartmentShortName): Observable<any> {
    return this.http.get('./api/apartment/' + apartmentShortName)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  public getBookedPeriods(apartmentId, startDate, endDate): Observable<BookedPeriodsModel[]> {
    return this.http.get('./api/getMonth/' + apartmentId + '/' + startDate + '/' + endDate)
      .map((res: Response) => <BookedPeriodsModel>res.json())
      .catch(this.handleError);
  }

  private handleError(error: any) {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
