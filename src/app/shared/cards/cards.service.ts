// Core
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

// Models
import { Cards } from './cards.interface';

@Injectable()
export class CardsService {
  constructor( private  _http: Http) {}

  getCards(language): Observable<Cards[]> {
    return this._http.get('./api/cards/' + language).map(
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
