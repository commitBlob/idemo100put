// Core
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// App specific

@Component({
  selector: 'apartments',
  templateUrl: './apartment.component.html',
})
export class ApartmentComponent implements OnInit, OnDestroy {
  apID: number;
  private _sub: any;

  constructor(private _route: ActivatedRoute) { }

  public ngOnInit() {
    this._sub = this._route.params.subscribe(params => {
      this.apID = + params['apartmentName'];
    });
  }

  public ngOnDestroy() {
    this._sub.unsubscribe();
  }
}
