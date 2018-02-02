// Core
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

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

  duFactsInteresingContent: Content[];
  langSubscription: Subscription;
  language: String;

  constructor(private languageService: LanguagesService,
              private  contentService: ContentService) {
    this.langSubscription = languageService.subjectSourceAnnounced$.subscribe(
      (value) => {
        if (this.language !== value) {
          this.language = value;
          this.getContent(this.language);
        }
      });
  }

  getContent(language) {
    this.contentService.getDuFactsInteresting(language).subscribe(
      (content) => this.duFactsInteresingContent = <Content[]>content
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
