// Core
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

// App specific
import { ContentService } from '../../../shared/content-service/content.service';
import { LanguagesService } from '../../../shared/languages/languages.service';
import { PricelistService } from '../../../shared/pricelist/pricelist.service';

// Models
import { Content } from '../../../shared/content-service/content.interface';

@Component({
  selector: 'app-cro-money',
  templateUrl: './croatia-facts-money.component.html',
})
export class CroatiaFactsMoneyComponent implements OnInit, OnDestroy {

  currencyList = ['HRK', 'GBP', 'USD'];
  comparedToKuna = ['EUR', 'GBP', 'USD'];
  defaultCurrency = 'HRK';
  defaultCurrencyValue; // as Euro is base currency I need to divide all the values with Euro
  moneyContent: Content[];
  langSubscription: Subscription;
  language: String;
  euroBaseList = {};
  kunaBaseList = {};

  constructor(
    private languageService: LanguagesService,
    private contentService: ContentService,
    private courselistService: PricelistService
  ) {
    this.langSubscription = languageService.subjectSourceAnnounced$.subscribe(
      (value) => {
        if ( this.language !== value) {
          this.language = value;
          this.getContent(this.language);
        }
      }
    );
  }

  getContent(language) {
    this.contentService.getCroMoneyContent(language).subscribe(
      (content) => {
        this.moneyContent = <Content[]>content;
      }
    );
  }

  getcourseList() {
    const tempCurrencyName = [];
    const tempCurrencyCourse = [];
    const tempCourseList = {};
    this.courselistService.getCourseList().subscribe(
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
          tempCourseList[value] = tempCurrencyCourse[key];
        });
        this.currencyList.forEach((value: any) => {
          const tempValue = value;
          if (tempCourseList[tempValue]) {
            this.euroBaseList[tempValue] = tempCourseList[tempValue];
            if (tempValue === this.defaultCurrency) {
              this.defaultCurrencyValue = tempCourseList[tempValue];
            }
          }
        });
        this.convertEuros();
      }
    );
  }

  convertEuros() {
    let tempValueHolder;
    this.kunaBaseList['EUR'] = this.defaultCurrencyValue;
    this.currencyList.forEach((value: any, key: any) => {
      if (value !== 'HRK') {
        tempValueHolder = this.defaultCurrencyValue / this.euroBaseList[value];
        this.kunaBaseList[value] = tempValueHolder.toString();
      }
    });
  }

  ngOnInit() {
    this.languageService.getLanguage();
    this.getcourseList();
  }

  ngOnDestroy() {
    this.langSubscription.unsubscribe();
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
