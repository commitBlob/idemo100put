// Core
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';
import { _throw } from 'rxjs/observable/throw';

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
  defaultCurrencyValue;
  moneyContent: Content;
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

  getContent(language): void {
    const moneyText: Content[] = [
      {
        header: 'Kuna - Official Currency',
        content: '<p>In use since 1994, kuna is the official currency in Croatia. It is subdivided into 100 lipa. ' +
          'The word "kuna" means "marten" in Croatian, since it is based on the use of marten pelts as units of ' +
          'value in medieval trading. The word "lipa" means "linden tree".</p><p>You may be able to pay in Euros at' +
          ' some places, but please note that this is entirely on an unofficial basis. The Euro is not an official ' +
          'currency in Croatia, hence no business or individual is required to accept it as payment.</p>',
        language: 'eng',
        ECB: '',
        note: ''
      },
      {
        header: '',
        content: '',
        language: 'cro',
        ECB: '',
        note: ''
      }
    ];
    this.moneyContent = moneyText.find(record => record.language === language);
  }

  // TODO: refactor with https://exchangeratesapi.io/
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

  convertEuros(): void {
    let tempValueHolder;
    this.kunaBaseList['EUR'] = this.defaultCurrencyValue;
    this.currencyList.forEach((value: any, key: any) => {
      if (value !== 'HRK') {
        tempValueHolder = this.defaultCurrencyValue / this.euroBaseList[value];
        this.kunaBaseList[value] = tempValueHolder.toString();
      }
    });
  }

  ngOnInit(): void {
    this.languageService.getLanguage();
    // this.getcourseList();
  }

  ngOnDestroy(): void {
    this.langSubscription.unsubscribe();
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
