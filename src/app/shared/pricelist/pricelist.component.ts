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
  public apartment;
  private _sub: any;
  public courseList = {};
  public parsedCourseList = {};
  public selectedValue: string = this.defaultCurrency;
  public courseListLoaded = false;
  public tempPricelist: PricelistModel[];
  public course = 1;


  constructor(private _pricelistService: PricelistService,
              private _route: ActivatedRoute) {

    this._sub = this._route.params.subscribe(params => {
      this.apartment = params['apartmentName'];
    });
  }

  public ngOnInit() {
    this._pricelistService.getPricelist(this.apartment).subscribe(
      (data) => {
        this.priceList = <PricelistModel[]>data;
        this.tempPricelist = <PricelistModel[]>data;
      },
      (error) => {
        this.handleError(error);
      });
    this.loadCourseList();
  }

  /**
   *  @param changeValue
   *  If courseListLoaded is true check changeValue
   *  If changeValue is not equal to defaultCurrency update default and trigger doCalculation function
   *  If changeValue is equal to default trigger doCalculation function
   *  If courseListLoaded is not true, trigger loadCourseList function
   */
  public currencyChange(changeValue) {
    if (this.courseListLoaded) {
      if (changeValue !== this.defaultCurrency) {
        this.defaultCurrency = changeValue;
        this.course = this.courseList[changeValue];
      }else {
        this.course = this.courseList[this.defaultCurrency];
      }
    }else {
      this.loadCourseList();
    }
  }

  /**
   * Check if courseListLoaded has been set already
   * Get course list from backend
   * Strip course list and save values in temp arrays
   * Append `currency: course` into parsedCourseList object
   * Set ourseListLoaded boolean to true
   */
  public loadCourseList() {
    const tempCurrencyName = [];
    const tempCurrencyCourse = [];
    if (!this.courseListLoaded) {
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
          this.courseListLoaded = true;
        });
    }
  }

  public generateArray(obj, course) {
    let calc = 0;
    return Object.keys(obj).map((key) => {
      calc = obj[key] * course
      return {key: key, value: calc}
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
