// Core
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

// App specific
import { GlobalVariables } from '../../../globals';

@Component({
  templateUrl: 'love-and-hope-facilities.component.html',
})
export class LoveAndHopeFacilitiesComponent implements OnInit {
  private _globalLogoPath = GlobalVariables.logoPath;
  constructor(private _location: Location) { }

  public ngOnInit() {
  }

  goBack() {
    this._location.back();
  }
}
