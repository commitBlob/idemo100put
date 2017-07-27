// Core
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

// Models
import { Content } from './content.interface';

@Injectable()
export class ContentService {
  constructor(private _http: Http) {
  }

  public getAboutUsContent(language): Observable<Content[]> {
    return this._http.get('./api/aboutcontent/' + language).map(
      (res: Response) => res.json()
    ).catch(this.handleError);
  }

  public getContactUsContent(language): Observable<Content[]> {
    return this._http.get('./api/contactcontent/' + language).map(
      (res: Response) => res.json()
    ).catch(this.handleError);
  }

  public getCroatiaFactsContent(language): Observable<Content[]> {
    return this._http.get('./api/crofacts/' + language).map(
      (res: Response) => res.json()
    ).catch(this.handleError);
  }

  public getDubrovnikFactsContent(language): Observable<Content[]> {
    return this._http.get('./api/dufacts/' + language).map(
      (res: Response) => res.json()
    ).catch(this.handleError);
  }

  public getSurroundingsContent(language): Observable<Content[]> {
    return this._http.get('./api/surroundings/' + language).map(
      (res: Response) => res.json()
    ).catch(this.handleError);
  }

  public getPolicyContent(language): Observable<Content[]> {
    return this._http.get('./api/policy/' + language).map(
      (res: Response) => res.json()
    ).catch(this.handleError);
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
