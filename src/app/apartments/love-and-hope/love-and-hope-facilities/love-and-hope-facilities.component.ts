// Core
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  templateUrl: 'love-and-hope-facilities.component.html',
})
export class LoveAndHopeFacilitiesComponent implements OnInit {
  constructor(private _location: Location) { }

  public ngOnInit() {
  }

  goBack() {
    this._location.back();
  }
}
