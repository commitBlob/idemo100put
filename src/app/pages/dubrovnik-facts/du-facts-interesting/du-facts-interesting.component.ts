// Core
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { IntervalObservable } from 'rxjs/observable/IntervalObservable';

// App specific
import { ContentService } from '../../../shared/content-service/content.service';
import { LanguagesService } from '../../../shared/languages/languages.service';

// Models
import { Content } from '../../../shared/content-service/content.interface';


@Component({
  selector: 'app-du-interesting',
  templateUrl: './du-facts-interesting.component.html'
})
export class DuFactsInterestingComponent implements OnInit, OnDestroy {

  duFactsInterestingContent: Content[];
  langSubscription: Subscription;
  language: String;

  activeFactIndex: number;

  constructor(private languageService: LanguagesService,
              private  contentService: ContentService) {
    this.langSubscription = languageService.subjectSourceAnnounced$.subscribe(
      (value) => {
        if (this.language !== value) {
          this.getContent(value);
          this.language = value;
        }
      });
  }

  getContent(language) {
    this.contentService.getDuFactsInteresting(language).subscribe(
      (content) => {
        this.duFactsInterestingContent = <Content[]>content;
        this.getRandomNumber(this.duFactsInterestingContent.length);
      }
    );
  }

  getRandomNumber(maxRange) {
    // get random number between 0 and interestingFacts length - 1
    this.activeFactIndex = Math.floor(Math.random() * (maxRange) );
  }

  factSelected(factIndex) {
    console.log('fact index', factIndex);
    this.activeFactIndex = factIndex;
  }

  previous() {
    let factIndex = this.activeFactIndex;
    if (factIndex > 0) {
      factIndex--;
      this.activeFactIndex = factIndex;
    } else {
      const arrayLength = this.duFactsInterestingContent.length;
      this.activeFactIndex = arrayLength - 1;
    }
  }

  next() {
    let factIndex = this.activeFactIndex;
    const arrayLength = this.duFactsInterestingContent.length - 1;
    if (factIndex === arrayLength) {
      this.activeFactIndex = 0;
    } else {
      factIndex++;
      this.activeFactIndex = factIndex;
    }
  }

  swipe(event) {
    switch (event) {
      case 'swiperight':
        this.next();
        break;
      case 'swipeleft':
        this.previous();
        break;
    }
  }

  ngOnInit() {
    this.languageService.getLanguage();
    // set interval to 15 seconds
    IntervalObservable.create(15000)
      .subscribe(() => {
        this.next();
      });
  }

  ngOnDestroy() {
    this.langSubscription.unsubscribe();
  }
}
