// Core
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class LanguagesService {
  public languageSelected = 'eng';
  public subjectSource = new Subject<string>();
  public subjectSourceAnnounced$ = this.subjectSource.asObservable();

  constructor(private _http: Http) {
  }

  public getFlags(): Observable<string[]> {
    return this._http.get('media/flags_data.json').map((res: Response) => res.json()).catch(this.handleError);
  }

  public languageChange(value) {
    this.languageSelected = value;
    this.subjectSource.next(this.languageSelected);
  }

  public getLanguage() {
    this.subjectSource.next(this.languageSelected);
  }

  /**
   * Handle HTTP error
   */
  private handleError(error: any) {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}
