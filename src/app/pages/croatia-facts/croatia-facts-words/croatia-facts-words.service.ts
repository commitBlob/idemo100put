// Core
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

// Models
import { Words } from './croatia-facts-words.interface';

@Injectable()
export class CroatiaFactsWordsService {
  constructor( private  http: HttpClient) {}

  getWords(): Observable<Words[]> {
    return this.http.get('./api/words/').catch(this.handleError);
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
