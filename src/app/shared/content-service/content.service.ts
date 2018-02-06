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

  getLandingContent(language): Observable<Content[]> {
    return this.http.get('./api/landingcontent/'+ language).catch(this.handleError);
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

  getDuFactsUsefulContent(language): Observable<Content[]> {
    return this.http.get('./api/dufactsuseful/' + language).catch(this.handleError);
  }

  getDuFactsInteresting(language): Observable<Content[]> {
    return this.http.get('./api/interestingFacts/' + language).catch(this.handleError);
  }

  getDuFactsBusiestMonths(language): Observable<Content[]> {
    return this.http.get('./api/busiestmonths/'+ language).catch(this.handleError);
  }

  public getDuWeRecommendContent(language): Observable<Content[]> {
    return this.http.get('./api/werecommend/' + language).catch(this.handleError);
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
