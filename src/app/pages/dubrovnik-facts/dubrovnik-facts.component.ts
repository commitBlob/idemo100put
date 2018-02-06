// Core
import { AfterContentChecked, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

// App specific
import { LanguagesService } from '../../shared/languages/languages.service';
import { ContentService } from '../../shared/content-service/content.service';
import { ResponsiveService } from '../../shared/responsive-service/responsive.service';

// Models
import { Content } from '../../shared/content-service/content.interface';

@Component({
  templateUrl: './dubrovnik-facts.component.html',
})
export class DubrovnikFactsComponent implements OnInit, OnDestroy, AfterContentChecked {

  dubrovnikFactsContent: Content[];
  langSubscription: Subscription;
  language: String;
  responsiveMode$: Observable<any>;
  mode: any;
  displayColumnChart: boolean = false;
  displayBarChart: boolean = false;

  constructor(private languageService: LanguagesService,
              private contentService: ContentService,
              private responsiveService: ResponsiveService,
              private cdRef: ChangeDetectorRef) {
    this.langSubscription = languageService.subjectSourceAnnounced$.subscribe(
      (value) => {
        if ( this.language !== value) {
          this.language = value;
          this.getContent(this.language);
        }
      }
    );
    this.responsiveMode$ = this.responsiveService.select('responsiveMode');
    this.responsiveMode$.subscribe((value) => this.mode = value);
  }

  ngOnInit() {
    this.languageService.getLanguage();
    this.responsiveMode$ = this.responsiveService.select<any>('responsiveMode');
  }

  getContent(language) {
    this.contentService.getDubrovnikFactsContent(language).subscribe(
      (content) => {
        this.dubrovnikFactsContent = <Content[]>content;
      }
    );
  }

  ngOnDestroy() {
    this.langSubscription.unsubscribe();
  }

  ngAfterContentChecked() {
    if (this.mode.windowWidth < 600) {
      this.displayBarChart = true;
      this.displayColumnChart = false;
    }

    if(this.mode.windowWidth >= 600) {
      this.displayBarChart = false;
      this.displayColumnChart = true;
    }

    this.cdRef.detectChanges();
  }
}
