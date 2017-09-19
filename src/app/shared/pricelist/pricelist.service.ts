// Core
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

// Models
import { PricelistModel } from './pricelist.interface';

@Injectable()
export class PricelistService {
  public pricelist: PricelistModel;

  constructor( private  _http: Http) {}

  getPricelist(apartment) {
    // TODO: create backend!
    return this._http.get('./api/pricelist/' + apartment).map(
      (res: Response) => res.json()
    ).catch(this.handleError);
  }

  calculatePrice(pricelistObject, currency) {
    this.pricelist = pricelistObject;
  }

  private handleError(error: any) {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
