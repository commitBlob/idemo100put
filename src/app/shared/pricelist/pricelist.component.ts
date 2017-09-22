// Core
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

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
  public courseList = {};
  public parsedCourseList = {};
  public selectedValue: string = this.defaultCurrency;
  public courseListLoaded = false;
  public tempPricelist: PricelistModel[];
  public course;


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
        this.tempPricelist = <PricelistModel[]>data;
      },
      (error) => {
        this.handleError(error);
      });
  }

  public currencyChange(changeValue) {
    if (this.courseListLoaded) {
    }else {
      this.loadCourseList();
    }
    // if select value is not equal to default value, update default value
    if (changeValue !== this.defaultCurrency) {
      console.log('iffy', changeValue);
      this.defaultCurrency = changeValue;
      console.log(this.courseList[changeValue]);
      this.doCalculation(this.courseList[changeValue]);
      // this.doCalculation();
    }
  }


  // TODO: finish calculation
  public doCalculation(course) {
    console.log(this.tempPricelist[0].monthlyPrice);
  }

  public loadCourseList() {
    const tempCurrencyName = [];
    const tempCurrencyCourse = [];
    this._pricelistService.getCourseList().subscribe(
      (data) => {
          data.body['gesmes:Envelope'].Cube[0].Cube[0].Cube.forEach((value: any) => {
            tempCurrencyName.push(value['$'].currency);
            tempCurrencyCourse.push(value['$'].rate);
          });
      },
      (error) => {
        this.handleError(error);
      },
      () => {
        tempCurrencyName.forEach((value: any, key: any) => {
          this.parsedCourseList[value] = tempCurrencyCourse[key];
        });
        this.parsedCourseList['EUR'] = '1';
        this.currencyList.forEach((value: any) => {
          const tempValue = value;
          if (this.parsedCourseList[tempValue]) {
            this.courseList[tempValue] = this.parsedCourseList[tempValue]
          }
        });
        console.log(this.courseList);
        this.courseListLoaded = true;
      });
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
