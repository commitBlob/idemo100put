// Core
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

// App specific
import { ContentService } from '../../../shared/content-service/content.service';
import { LanguagesService } from '../../../shared/languages/languages.service';

// Models
import { Content } from '../../../shared/content-service/content.interface';

@Component({
  selector: 'app-du-useful',
  templateUrl: './du-facts-useful.component.html'
})
export class DuFactsUsefulComponent implements OnInit, OnDestroy {

  duFactsUsefulContent: Content[];
  langSubscription: Subscription;
  language: String;

  constructor(private contentService: ContentService,
              private languageService: LanguagesService) {
    this.langSubscription = languageService.subjectSourceAnnounced$.subscribe(
      (value) => {
        if (this.language !== value) {
          this.language = value;
          this.getContent(this.language);
        }
      }
    );
  }

  getContent(language) {
    this.contentService.getDuFactsUsefulContent(language).subscribe(
      (content) => {
        this.duFactsUsefulContent = <Content[]>content;
      }
    );
  }

  ngOnInit() {
    this.languageService.getLanguage();
  }

  ngOnDestroy() {
    this.langSubscription.unsubscribe();
  }
}
