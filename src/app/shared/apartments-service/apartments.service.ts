// Core
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { of } from 'rxjs/internal/observable/of';
import { _throw } from 'rxjs/observable/throw';

@Injectable()
export class ApartmentService {
  constructor(private http: HttpClient) {
  }

  getApartments(): Observable<any> {
    return this.http.get('./api/apartments').catch(this.handleError);
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
