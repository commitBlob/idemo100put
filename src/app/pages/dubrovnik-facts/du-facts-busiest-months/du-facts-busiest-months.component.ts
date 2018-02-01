// Core
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

// App specific
import { ContentService } from '../../../shared/content-service/content.service';
import { LanguagesService } from '../../../shared/languages/languages.service';

// Models
import { Content } from '../../../shared/content-service/content.interface';

@Component({
  selector: 'app-du-facts-busy',
  templateUrl: './du-facts-busiest-months.component.html'
})
export class DuFactsBusiestMonthsComponent implements OnInit, OnDestroy {

  duFactsBusiestMonthsContent: Content[];
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
    this.contentService.getDuFactsBusiestMonths(language).subscribe(
      (content) => this.duFactsBusiestMonthsContent = <Content[]>content
    );
  }

  ngOnInit() {
    this.languageService.getLanguage();
  }

  ngOnDestroy() {
    this.langSubscription.unsubscribe();
  }
}
