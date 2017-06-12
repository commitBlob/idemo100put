// Core
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

// App specific
import { NavigationService } from '../../shared/navigation/navigation-service/navigation-service';

@Component({
  templateUrl: 'love-and-hope.component.html',
  providers: [ NavigationService ]
})
export class LoveAndHopeComponent implements OnInit {
  private _navigation: any;
  constructor(private _navigationService: NavigationService, private _location: Location) { }

  public ngOnInit() {
    this.getNavigation();
  }

  goBack() {
    this._location.back();
  }

  getNavigation() {
    this._navigation = this._navigationService.getApartmentNavigation()
  }
}
