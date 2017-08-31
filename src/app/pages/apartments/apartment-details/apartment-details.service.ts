// Core
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

// App specific
import { ApartmentDetails } from './apartment-details.interface';
import { NearbyPlaces } from './nearby-places.interface';

@Injectable()
export class ApartmentDetailsService {
  constructor(private _http: Http) {
  }

  public getApartmentData(apartmentShortName, language): Observable<ApartmentDetails[]> {
    return this._http.get('./api/apartments/' + apartmentShortName + '/' + language).map(
      (res: Response) => res.json()
    ).catch(this.handleError);
  }

  public getNearbys(apartmentShortName): Observable<NearbyPlaces[]> {
    return this._http.get('./api/nearbys/' + apartmentShortName).map(
      (res: Response) => res.json()
    ).catch(this.handleError);
  }

  /**
   * Handle HTTP error
   */
  private handleError(error: any) {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
