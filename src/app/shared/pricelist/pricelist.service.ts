// Core
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';


@Injectable()
export class PricelistService {
  constructor( private  _http: Http) {}

  getPricelist(apartment) {
    return this._http.get('./api/pricelist/' + apartment).map(
      (res: Response) => res.json()
    ).catch(this.handleError);
  }

  getCourseList() {
    return this._http.get('./api/courselist').map(
      (res: Response) => res.json()
    ).catch(this.handleError);
  }

  private handleError(error: any) {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
