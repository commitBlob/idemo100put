// Core
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { _throw } from 'rxjs/observable/throw';
import { of } from 'rxjs/internal/observable/of';

@Injectable()
export class GalleryService {
  constructor(private http: HttpClient) {}

  getImages(apartment): Observable<any> {
    return this.http.get('./api/gallery/' + apartment).catch(this.handleError);
  }

  /**
   * Handle HTTP error
   */
  private handleError(error: any) {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return of(_throw(errMsg));
  }
}
