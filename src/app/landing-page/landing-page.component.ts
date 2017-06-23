// Core
import { Component, HostBinding, OnInit } from '@angular/core';

// App specific
import { GlobalVariables } from '../globals';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
})
export class LandingPageComponent implements OnInit {
  @HostBinding('class.menu_open') public menuOpen = false;
  @HostBinding('class.is-active') public hamburgerOpen = false;
  private _globalLogoPath = GlobalVariables.logoPath;
  private _globalImagePath = GlobalVariables.imagesPath;

  constructor() { }

  ngOnInit() {
  }

  public toggleMenu() {
    this.menuOpen = !this.menuOpen;
    this.hamburgerOpen = !this.hamburgerOpen;
  }

}
