// Core
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

// App specific
import { GlobalNavigation } from '../navigation-list';

@Injectable()
export class NavigationService {

  constructor() {
  }

  /* Navigation list is defined in GlobalNavigation, will not use service*/
  public getAppNavigation() {
    return GlobalNavigation;
  }
}
