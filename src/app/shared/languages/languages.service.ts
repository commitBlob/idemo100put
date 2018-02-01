// Core
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LanguagesService {
  languageSelected = 'eng';
  subjectSource = new Subject<string>();
  subjectSourceAnnounced$ = this.subjectSource.asObservable();

  constructor(private http: HttpClient) {
  }

  getFlags(): Observable<string[]> {
    return this.http.get('./api/flags').catch(this.handleError);
  }

  languageChange(value) {
    this.languageSelected = value;
    this.subjectSource.next(this.languageSelected);
  }

  getLanguage() {
    this.subjectSource.next(this.languageSelected);
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
