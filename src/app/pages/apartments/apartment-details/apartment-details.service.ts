// Core
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

// App specific
import { ApartmentDetails } from './apartment-details.interface';
import { NearbyPlaces } from './nearby-places.interface';
import { of } from 'rxjs/internal/observable/of';
import { _throw } from 'rxjs/observable/throw';

@Injectable()
export class ApartmentDetailsService {
  constructor(private http: HttpClient) {
  }

  getApartmentData(apartmentShortName, language): Observable<any> {
    return this.http.get('./api/apartments/' + apartmentShortName + '/' + language).catch(this.handleError);
  }

  getNearbys(apartmentShortName): Observable<any> {
    return this.http.get('./api/nearbys/' + apartmentShortName).catch(this.handleError);
  }

  /**
   * Handle HTTP error
   */
  private handleError(error: any) {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return of(_throw(errMsg));
  }
}
