// Core
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// App specific

@Component({
  templateUrl: './apartment.component.html',
})
export class ApartmentComponent implements OnInit, OnDestroy {
  apartmentName: string;
  private _sub: any;

  constructor(private _route: ActivatedRoute) { }

  public ngOnInit() {
    this._sub = this._route.params.subscribe(params => {
      this.apartmentName = params['apartmentName'];
    });
  }

  public ngOnDestroy() {
    this._sub.unsubscribe();
  }
}
