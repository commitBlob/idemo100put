// Core
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

// Models
import { ThingsToDo } from './things-to-do.interface';

@Injectable()
export class ThingsToDoService {
  constructor(private http: HttpClient) {
  }

  getToDoList(language): Observable<ThingsToDo[]> {
    return this.http.get('/api/thingstodo/' + language).catch(this.handleError);
  }

  getActivity(language, activityName): Observable<ThingsToDo[]> {
    return this.http.get('/api/thingstodo/' + activityName + '/' + language).catch(this.handleError);
  }

  getBanner(activityShortName): Observable<any> {
    return this.http.get('/api/activitybanner/' + activityShortName).catch(this.handleError);
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
