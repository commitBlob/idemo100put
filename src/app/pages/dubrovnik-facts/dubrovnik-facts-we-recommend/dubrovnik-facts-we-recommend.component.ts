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
export class DubrovnikFactsWeRecommendComponent implements OnInit, OnDestroy{

  weRecommendContent: Content[];
  langSubscription: Subscription;
  language: String;

  constructor(private languageService: LanguagesService,
              private contentService: ContentService,) {
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
    this.contentService.getDuWeRecommendContent(language).subscribe(
      (content) => this.weRecommendContent = <Content[]>content
    );
  }

  ngOnInit() {
    this.languageService.getLanguage();
    this.getContent(this.language);
  }

  ngOnDestroy() {
    this.langSubscription.unsubscribe();
  }
}
