// Core
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

// Models
import { Cards } from './cards.interface';

@Injectable()
export class CardsService {
  constructor( private  http: HttpClient) {}

  getCards(language): Observable<any> {
    return this.http.get('./api/cards/' + language).catch(this.handleError);
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
