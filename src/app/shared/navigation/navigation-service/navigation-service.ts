// Core
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

// App specific
import { Navigation, ApartmentSelectorNav, ApartmentsNav, GlobalNavigation } from '../navigation-list';

@Injectable()
export class NavigationService {

  constructor(private _http: Http) {
  }

  public getMainNavigation() {
    return Navigation;
  }

  public getApartmentNavigation() {
    return ApartmentsNav;
  }

  public getApartmentsList() {
    return ApartmentSelectorNav;
  }

  public getAppNavigation() {
    return GlobalNavigation;
  }

  public getNavigation(): Observable<string[]> {
    console.log('getNavigation function triggered');
    return this._http.get('media/navigation_data.json').map((res: Response) => res.json()).catch(this.handleError);
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
