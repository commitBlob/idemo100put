import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class TabsNavigationService {
  constructor(private _http: Http) {
  }

  public getApartments(): Observable<string[]> {
    return this._http.get('./api/apartments')
      .map((res: Response) => res.json())
      .catch(this.handleError);
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
