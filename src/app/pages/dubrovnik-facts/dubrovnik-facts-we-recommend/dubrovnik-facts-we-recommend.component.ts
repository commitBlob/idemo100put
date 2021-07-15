// Core
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

// App specific
import { LanguagesService } from '../../../shared/languages/languages.service';
import { GlobalVariables } from '../../../globals';

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

  constructor(private languageService: LanguagesService) {
    this.langSubscription = languageService.subjectSourceAnnounced$.subscribe(
      (value) => {
        if (this.language !== value) {
          this.language = value;
          this.getContent(this.language);
        }
      }
    )
  }

  getContent(language): void {
    const weRecommendRecords: Content[] = [
      {
        image: `${GlobalVariables.imagesPath}/recommendations/stradun.png`,
        header: 'Stradun (Main Street)',
        content: 'Dubrovnik',
        language: 'eng'
      },
      {
        image: `${GlobalVariables.imagesPath}/recommendations/city_walls.png`,
        header: 'City Walls',
        content: 'Dubrovnik',
        language: 'eng'
      },
      {
        image: `${GlobalVariables.imagesPath}/recommendations/cable_car.png`,
        header: 'Cable Car',
        content: 'Dubrovnik',
        language: 'eng'
      },
      {
        image: `${GlobalVariables.imagesPath}/recommendations/lokrum.png`,
        header: 'Lokrum Island',
        content: 'Dubrovnik',
        language: 'eng'
      },
      {
        image: `${GlobalVariables.imagesPath}/recommendations/lokrum.png`,
        header: 'Lokrum',
        content: 'Dubrovnik',
        language: 'cro'
      },
      {
        image: `${GlobalVariables.imagesPath}/recommendations/peljesac.png`,
        header: 'Wine Tours',
        content: 'Pelješac',
        language: 'eng'
      },
      {
        image: `${GlobalVariables.imagesPath}/recommendations/stradun.png`,
        header: 'Stradun',
        content: 'Dubrovnik',
        language: 'cro'
      },
      {
        image: `${GlobalVariables.imagesPath}/recommendations/city_walls.png`,
        header: 'Gradske Zidine',
        content: 'Dubrovnik',
        language: 'cro'
      },
      {
        image: `${GlobalVariables.imagesPath}/recommendations/cable_car.png`,
        header: 'Žičara',
        content: 'Dubrovnik',
        language: 'cro'
      },
      {
        image: `${GlobalVariables.imagesPath}/recommendations/peljesac.png`,
        header: 'Wine Tours',
        content: 'Pelješac',
        language: 'cro'
      }
    ];
    this.weRecommendContent = weRecommendRecords.filter(record => record.language === language);
  }

  ngOnInit(): void {
    this.languageService.getLanguage();
  }

  ngOnDestroy(): void {
    this.langSubscription.unsubscribe();
  }
}
