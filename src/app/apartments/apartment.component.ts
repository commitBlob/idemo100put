// Core
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

// App specific
import { NavigationService } from '../shared/navigation/navigation-service/navigation-service';

@Component({
  templateUrl: 'apartment.component.html',
  providers: [ NavigationService ]
})
export class ApartmentComponent implements OnInit {
  private _navigation: any;
  private _apartmentsList: any;
  constructor(private _navigationService: NavigationService, private _location: Location) { }

  public ngOnInit() {
    this.getNavigation();
    this.getApartmentsList();
  }

  goBack() {
    this._location.back();
  }

  getNavigation() {
    this._navigation = this._navigationService.getMainNavigation();
  }
  getApartmentsList() {
    this._apartmentsList = this._navigationService.getApartmentsList();
  }
}
