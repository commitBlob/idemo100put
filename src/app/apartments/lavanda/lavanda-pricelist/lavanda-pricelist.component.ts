// Core
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  templateUrl: 'lavanda-pricelist.component.html',
})
export class LavandaPricelistComponent implements OnInit {
  constructor(private _location: Location) { }

  public ngOnInit() {
  }

  goBack() {
    this._location.back();
  }
}
