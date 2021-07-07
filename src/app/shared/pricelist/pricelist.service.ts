// Core
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { of } from 'rxjs/internal/observable/of';
import { _throw } from 'rxjs/observable/throw';

@Injectable()
export class PricelistService {
  constructor( private  http: HttpClient) {}

  getPricelist(apartment) {
    return this.http.get('./api/pricelist/' + apartment).catch(this.handleError);
  }

  getCourseList() {
    return this.http.get('./api/courselist').catch(this.handleError);
  }

  private handleError(error: any) {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return of(_throw(errMsg));
  }
}
