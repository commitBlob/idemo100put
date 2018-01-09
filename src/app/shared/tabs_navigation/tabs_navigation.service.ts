import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class TabsNavigationService {
  constructor(private http: HttpClient) {
  }

  public getApartments(): Observable<string[]> {
    return this.http.get('./api/apartments').catch(this.handleError);
  }

  /**
   * Handle HTTP error
   */
  private handleError(error: any) {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error('Error occurred', errMsg);
    return Observable.throw(errMsg);
  }
}
