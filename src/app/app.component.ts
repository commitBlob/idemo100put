// Core
import { Component, HostBinding, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';

// App specific
import { GlobalVariables } from './globals';
import { NavigationService } from './shared/navigation/navigation-service/navigation-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  @HostBinding('class.menu_open') public menuOpen = false;
  @HostBinding('class.is-active') public hamburgerOpen = false;
  private _globalLogoPath = GlobalVariables.logoPath;
  private _globalImagePath = GlobalVariables.imagesPath;
  private _navigationList: any;
  public navigationData: String[];
  public errorMessage: string;

  constructor(private _navigationService: NavigationService) { }

  ngOnInit() {
    this.getNavigation();
    // this._navigationService.getNavigation().subscribe(
    //   (response) => this.navigationData = response,
    //   (error) => this.errorMessage = <any>error)
  }

  getNavigation() {
    this._navigationList = this._navigationService.getAppNavigation();
  }

  public toggleMenu() {
    console.log(this._navigationList, 'should be data');
    this.menuOpen = !this.menuOpen;
    this.hamburgerOpen = !this.hamburgerOpen;
  }
}
