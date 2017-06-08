import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../shared/navigation/navigation-service/navigation-service';

@Component({
  templateUrl: 'lavanda.component.html',
  providers: [ NavigationService ]
})
export class LavandaComponent implements OnInit {
  private _navigation: any;
  // public glavnaNavigacija: any;
  // public apLinks: any;
  constructor(private _navigationService: NavigationService) { }

  public ngOnInit() {
    // this.getMainNavigation();
    // this.getAptLinks();
    this.getNavigation();
  }

  getNavigation() {
    this._navigation = this._navigationService.getApartmentNavigation()
  }

  // getMainNavigation() {
  //   this.glavnaNavigacija = this._navigationService.getMainNavigation()
  //   console.log(this.glavnaNavigacija);
  // }
  //
  // getAptLinks() {
  //   this.apLinks = this._navigationService.getAptLinks()
  // }
}
