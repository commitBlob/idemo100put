// Core
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  templateUrl: 'love-and-hope-pricelist.component.html',
})
export class LoveAndHopePricelistComponent implements OnInit {
  constructor(private _location: Location) { }

  public ngOnInit() {
  }

  goBack() {
    this._location.back();
  }
}
