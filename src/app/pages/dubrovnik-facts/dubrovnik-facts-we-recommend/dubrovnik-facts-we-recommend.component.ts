// Core
import {Component, OnDestroy, OnInit} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

// App specific
import { LanguagesService } from '../../../shared/languages/languages.service';
import { ContentService } from '../../../shared/content-service/content.service';

// Models
import { Content } from '../../../shared/content-service/content.interface';

@Component({
  selector: 'app-du-recommend',
  templateUrl: './dubrovnik-facts-we-recommend.component.html',
})
export class DubrovnikFactsWeRecommendComponent implements OnInit, OnDestroy {

  weRecommendContent: Content[] = [];
  langSubscription: Subscription;
  language: String;

  constructor(private languageService: LanguagesService,
              private contentService: ContentService) {
    this.langSubscription = languageService.subjectSourceAnnounced$.subscribe(
      (value) => {
        if (this.language !== value) {
          this.language = value;
          this.getContent(this.language);
        }
      }
    )
  }

  getContent(language) {
    const weRecommendRecords: Content[] = [
      {
        image: '',
        header: 'Stradun (Main Street)',
        content: 'Dubrovnik',
        language: 'eng'
      },
      {
        image: '',
        header: 'City Walls',
        content: 'Dubrovnik',
        language: 'eng'
      },
      {
        image: '',
        header: 'Cable Car',
        content: 'Dubrovnik',
        language: 'eng'
      },
      {
        image: '',
        header: 'Lokrum Island',
        content: 'Dubrovnik',
        language: 'eng'
      },
      {
        image: '',
        header: 'Restaurant Dubrovnik',
        content: 'Dubrovnik',
        language: 'eng'
      },
      {
        image: '',
        header: 'Wine Tours',
        content: 'Pelješac',
        language: 'eng'
      },
      {
        image: '',
        header: 'Stradun',
        content: 'Dubrovnik',
        language: 'cro'
      },
      {
        image: '',
        header: 'Gradske Zidine',
        content: 'Dubrovnik',
        language: 'cro'
      },
      {
        image: '',
        header: 'Žičara',
        content: 'Dubrovnik',
        language: 'cro'
      },
      {
        image: '',
        header: 'Restoran Dubrovnik',
        content: 'Dubrovnik',
        language: 'cro'
      },
      {
        image: '',
        header: 'Wine Tours',
        content: 'Pelješac',
        language: 'cro'
      }
    ];
    this.weRecommendContent = weRecommendRecords.filter(record => record.language === language);
  }

  generateImage(image) {
    return 'data:image/png;base64,' + image;
  }

  ngOnInit() {
    this.languageService.getLanguage();
  }

  ngOnDestroy() {
    this.langSubscription.unsubscribe();
  }
}
