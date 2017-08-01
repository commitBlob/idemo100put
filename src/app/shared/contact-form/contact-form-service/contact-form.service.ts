// Core
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ContactFormService {
  constructor(private _http: Http) {
  }

  public submitForm(newSubmission) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.post('./api/contactform', JSON.stringify(newSubmission), {headers: headers}).map(res => res.json());
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
