// Core
import { Component, HostBinding, OnInit } from '@angular/core';
import { Location } from '@angular/common';

// App specific
import { GlobalVariables } from '../globals';
import { NavigationService } from '../shared/navigation/navigation-service/navigation-service';

@Component({
  templateUrl: 'apartment.component.html',
  providers: [ NavigationService ]
})
export class ApartmentComponent implements OnInit {
  @HostBinding('class.menu_open') public menuOpen = false;
  @HostBinding('class.is-active') public hamburgerOpen = false;
  private _globalLogoPath = GlobalVariables.logoPath;
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

  public toggleMenu() {
    this.menuOpen = !this.menuOpen;
    this.hamburgerOpen = !this.hamburgerOpen;
  }
}
