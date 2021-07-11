// Core
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

// App specific
import { PricelistService } from './pricelist.service';

// Models
import { PricelistModel } from './pricelist.interface';
import { of } from 'rxjs/internal/observable/of';
import { _throw } from 'rxjs/observable/throw';

@Component({
  selector: 'app-pricelist',
  templateUrl: './pricelist.component.html',
})
export class PricelistComponent implements OnInit {
  priceList: PricelistModel[];
  currencyList = ['EUR', 'GBP', 'USD', 'HRK'];
  defaultCurrency = 'EUR';
  apartment;
  private sub: any;
  courseList = {};
  parsedCourseList = {};
  selectedValue: string = this.defaultCurrency;
  courseListLoaded = false;
  tempPricelist: PricelistModel[];
  course = 1;


  constructor(private pricelistService: PricelistService,
              private route: ActivatedRoute) {

    this.sub = this.route.params.subscribe(params => {
      this.apartment = params['apartmentName'];
    });
  }

  ngOnInit() {
    this.pricelistService.getPricelist(this.apartment).subscribe(
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
  currencyChange(changeValue) {
    if (this.courseListLoaded) {
      if (changeValue !== this.defaultCurrency) {
        this.defaultCurrency = changeValue;
        this.course = this.courseList[changeValue];
      } else {
        this.course = this.courseList[this.defaultCurrency];
      }
    } else {
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
  loadCourseList() {
    const tempCurrencyName = [];
    const tempCurrencyCourse = [];
    if (!this.courseListLoaded) {
      this.pricelistService.getCourseList().subscribe(
        (data) => {
          data['gesmes:Envelope'].Cube[0].Cube[0].Cube.forEach((value: any) => {
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

  generateArray(obj, course) {
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
    return of(_throw(errMsg));
  }
}
