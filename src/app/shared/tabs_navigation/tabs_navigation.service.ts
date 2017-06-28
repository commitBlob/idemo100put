import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class TabsNavigationService {
  private _showNavTabs: boolean;

  displayNavTabs(navTabsBoolean) {
    this._showNavTabs = navTabsBoolean;
  }

  displayStatus() {
    return this._showNavTabs;
  }
}
