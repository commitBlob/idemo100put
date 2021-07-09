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
    const duFacts: Content[] = [
      {
        content: 'The city receives approximately 7.2 hours of sun per day. This is about 2630 hours of sun annually!',
        language: 'eng',
        header: 'Weather'
      },
      {
        content: 'Stari Grad je okruzen 2 kilometra dugim zidinama i 7 tvrdjava. Vecina znamenitosti u Gradu je sagradjena u baroknom stilu.',
        language: 'cro',
        header: 'Povijest'
      },
      {
        content: 'The city is surrounded by 2 kilometres of ancient walls and fortifications. Most of its buildings are built' +
          'using the Baroque style architectural designs.',
        language: 'eng',
        header: 'History'
      },
      {
        content: 'The city was the capital of the adventurous Republic of Ragusa, a maritime republic.',
        language: 'eng',
        header: 'History'
      },
      {
        content: 'Dubrovnik was the main filming location in Croatia for King’s Landing, a fictional city in Game of Thrones.',
        language: 'eng',
        header: 'TV and Series'
      },
      {
        content: 'In 1979, UNESCO added the city of Dubrovnik to the list of World Heritage Centers.',
        language: 'eng',
        header: 'Culture'
      },
      {
        content: 'The oldest pharmacy in Europe is located in the Franciscan Monastery, dating from the 15th century.',
        language: 'eng',
        header: 'History'
      },
      {
        content: 'Najstarija apoteka u Europi nalazi se u franjevackom samostanu, i datira iz 15. stoljeca.',
        language: 'cro',
        header: 'Povijest'
      },
      {
        content: 'Grad je obasjan suncem u prosijeku 7.2 sati dnevno, sto je 2630 suncanih sati godisnje!',
        language: 'cro',
        header: 'Vrijeme'
      },
      {
        content: 'Dubrovnik je bio glavni grad Dubrovacke Republike, daleko poznate po diplomaciji, pomorstvu, i trgovini.',
        language: 'cro',
        header: 'Povijest'
      },
      {
        content: 'Dubrovnik je poznat kao Kraljev Grudobran u poznatoj TV seriji Igre Prestolja',
        language: 'cro',
        header: 'TV i Serije'
      }
    ];
    this.duFactsInterestingContent = duFacts.filter(record => record.language === language);
    this.getRandomNumber(this.duFactsInterestingContent.length);
  }

  getRandomNumber(maxRange) {
    // get random number between 0 and interestingFacts length - 1
    this.activeFactIndex = Math.floor(Math.random() * (maxRange) );
  }

  factSelected(factIndex) {
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
    // set interval to 8 seconds
    IntervalObservable.create(8000)
      .subscribe(() => {
        this.next();
      });
  }

  ngOnDestroy() {
    this.langSubscription.unsubscribe();
  }
}
