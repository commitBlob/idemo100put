// Core
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

// App specific
import { GlobalVariables } from '../../../globals';

@Component({
  templateUrl: 'old-port-facilities.component.html',
})
export class OldPortFacilitiesComponent implements OnInit {
  private _globalLogoPath = GlobalVariables.logoPath;
  constructor(private _location: Location) { }

  public ngOnInit() {
  }

  goBack() {
    this._location.back();
  }
}
