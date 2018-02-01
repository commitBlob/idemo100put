// Core
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

// Models
import { Content } from './content.interface';

@Injectable()
export class ContentService {
  constructor(private http: HttpClient) {
  }

  getAboutUsContent(language): Observable<Content[]> {
    return this.http.get('./api/aboutcontent/' + language).catch(this.handleError);
  }

  getContactUsContent(language): Observable<Content[]> {
    return this.http.get('./api/contactcontent/' + language).catch(this.handleError);
  }

  getCroatiaFactsContent(language): Observable<Content[]> {
    return this.http.get('./api/crofacts/' + language).catch(this.handleError);
  }

  getDubrovnikFactsContent(language): Observable<Content[]> {
    return this.http.get('./api/dufacts/' + language).catch(this.handleError);
  }

  getSurroundingsContent(language): Observable<Content[]> {
    return this.http.get('./api/surroundings/' + language).catch(this.handleError);
  }

  getPolicyContent(language): Observable<Content[]> {
    return this.http.get('./api/policy/' + language).catch(this.handleError);
  }

  getCroMoneyContent(language): Observable<Content[]> {
    return this.http.get('./api/cromoney/' + language).catch(this.handleError);
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
