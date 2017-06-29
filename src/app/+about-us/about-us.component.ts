// Core
import { Component, HostBinding, OnInit } from '@angular/core';

// App specific

@Component({
  templateUrl: './about-us.component.html',
  providers: []
})
export class AboutUsComponent implements OnInit {
  @HostBinding('class.menu_open') public menuOpen = false;
  @HostBinding('class.is-active') public hamburgerOpen = false;

  constructor() { }

  public ngOnInit() {
  }

  public toggleMenu() {
    this.menuOpen = !this.menuOpen;
    this.hamburgerOpen = !this.hamburgerOpen;
  }
}
