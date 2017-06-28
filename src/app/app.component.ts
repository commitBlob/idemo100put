// Core
import {AfterViewChecked, Component, HostBinding, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';

// App specific
import { GlobalVariables } from './globals';
import { NavigationService } from './shared/navigation/navigation-service/navigation-service';
import { TabsNavigationService } from './shared/tabs_navigation/tabs_navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, AfterViewChecked {
  @HostBinding('class.menu_open') public menuOpen = false;
  @HostBinding('class.is-active') public hamburgerOpen = false;
  private _globalLogoPath = GlobalVariables.logoPath;
  private _globalImagePath = GlobalVariables.imagesPath;
  private _navigationList: any;
  public navigationData: String[];
  public errorMessage: string;

  private _navTabStatus: boolean;
  private _subscription: any;

  constructor(private _navigationService: NavigationService, private _tabsNavService: TabsNavigationService) { }

  ngOnInit() {
    this.getNavigation();
    // this._navigationService.getNavigation().subscribe(
    //   (response) => this.navigationData = response,
    //   (error) => this.errorMessage = <any>error)
  }

  ngAfterViewChecked() {
    this._navTabStatus = this._tabsNavService.displayStatus();
    console.log(this._navTabStatus, 'navtab status');
  }

  getNavigation() {
    this._navigationList = this._navigationService.getAppNavigation();
  }

  public toggleMenu() {
    this.menuOpen = !this.menuOpen;
    this.hamburgerOpen = !this.hamburgerOpen;
  }
}
