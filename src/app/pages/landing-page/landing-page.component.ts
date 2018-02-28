// Core
import { Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

// App specific
import { ApartmentService } from '../../shared/apartments-service/apartments.service';
import { ContentService } from '../../shared/content-service/content.service';
import { LanguagesService } from '../../shared/languages/languages.service';

// Models
import { Content } from '../../shared/content-service/content.interface';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
})
export class LandingPageComponent implements OnInit, OnDestroy {
  landingPageContent: Content[];
  language: String;
  langSubscription: Subscription;
  apartmentsData: String[];
  errorMessage: string;

  constructor(private  aptSer: ApartmentService,
              private languageService: LanguagesService,
              private contentService: ContentService) {
    this.langSubscription = languageService.subjectSourceAnnounced$.subscribe(
      (value) => {
        if (this.language !== value) {
          this.language = value;
          this.getContent(this.language);
        }
      }
    );
  }

  generateImage(image) {
    return 'data:image/jpeg;base64,' + image;
  }

  ngOnInit() {
    this.languageService.getLanguage();
    this.aptSer.getApartments().subscribe(
      (response) => {
        this.apartmentsData = response;
        sessionStorage.setItem('apartmentsData', JSON.stringify(this.apartmentsData));
      },
      (error) => this.errorMessage = <any>error
    );
  }

  getContent(language) {
    this.contentService.getLandingContent(language).subscribe(
      (content) => {
        this.landingPageContent = <Content[]>content;
      }
    );
  }

  ngOnDestroy() {
    this.langSubscription.unsubscribe();
  }
}
