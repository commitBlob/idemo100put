// Core
import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../shared/navigation/navigation-service/navigation-service';

@Component({
  templateUrl: 'old-port.component.html',
  providers: [ NavigationService ]
})
export class OldPortComponent implements OnInit {
  private _navigation: any;
  constructor(private _navigationService: NavigationService) { }

  public ngOnInit() {
    this.getNavigation();
  }

  getNavigation() {
    this._navigation = this._navigationService.getApartmentNavigation()
  }
}
