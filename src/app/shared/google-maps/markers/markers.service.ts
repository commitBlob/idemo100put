// Core
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

// Models
import { Markers } from './markers.interface';

@Injectable()
export class MarkersService {
  constructor( private  http: HttpClient) {}

  public getMarkers(): Observable<Markers[]> {
    return this.http.get('./api/markers').catch(this.handleError);
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
