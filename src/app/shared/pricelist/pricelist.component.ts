// Core
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

// App specific
import { PricelistService } from './pricelist.service';

// Models
import { PricelistModel } from './pricelist.interface';

@Component({
  selector: 'app-pricelist',
  templateUrl: './pricelist.component.html',
})
export class PricelistComponent implements OnInit {
  public priceList: PricelistModel[];
  public currencyList = ['EUR', 'GBP', 'USD', 'HRK'];
  public defaultCurrency = 'EUR';
  public calculationDone = false;
  public apartment;
  private _sub: any;

  constructor(private _pricelistService: PricelistService,
              private _route: ActivatedRoute) {

    this._sub = this._route.params.subscribe(params => {
      this.apartment = params['apartmentName'];
    });
  }

  public ngOnInit() {
    console.log(this.apartment, 'apartment');
    this._pricelistService.getPricelist(this.apartment).subscribe(
      (data) => {
        this.priceList = <PricelistModel[]>data;
      },
      (error) => {
        this.handleError(error);
      });
  }

  public currencyChange(changeValue) {
    // if select value is not equal to default value, update default value
    if (changeValue !== this.defaultCurrency) {
      this.defaultCurrency = changeValue;
      this.doCalculation();
    }
  }

  public doCalculation() {
    this._pricelistService.calculatePrice(this.priceList, this.defaultCurrency);
  }

  /**
   * Handle HTTP error
   */
  private handleError(error: any) {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
