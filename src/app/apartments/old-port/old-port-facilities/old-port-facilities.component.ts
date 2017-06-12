// Core
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  templateUrl: 'old-port-facilities.component.html',
})
export class OldPortFacilitiesComponent implements OnInit {
  constructor(private _location: Location) { }

  public ngOnInit() {
  }

  goBack() {
    this._location.back();
  }
}
