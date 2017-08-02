// Core
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

// Models
import { Markers } from './markers.interface';

@Injectable()
export class MarkersService {
  constructor( private  _http: Http) {}

  public getMarkers(): Observable<Markers[]> {
    return this._http.get('./api/markers')
      .map((res: Response) => <Markers>res.json())
      .catch(this.handleError);
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
