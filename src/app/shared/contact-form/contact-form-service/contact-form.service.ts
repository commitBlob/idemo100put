// Core
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { of } from 'rxjs/internal/observable/of';
import { _throw } from 'rxjs/observable/throw';

@Injectable()
export class ContactFormService {
  constructor(private http: HttpClient) {
  }

  public submitForm(newSubmission) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post('./api/contactform', JSON.stringify(newSubmission), {headers: headers});
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
