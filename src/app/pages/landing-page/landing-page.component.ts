// Core
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

// App specific
import { ApartmentService } from '../../shared/apartments-service/apartments.service';
import { GlobalVariables } from '../../globals';
import { LanguagesService } from '../../shared/languages/languages.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
})
export class LandingPageComponent implements OnInit, OnDestroy {
  landingPageContent: any;
  language: String;
  langSubscription: Subscription;
  apartmentsData = [
    {
      apartmentShortName: 'lavanda',
      apartmentImage: `${GlobalVariables.imagesPath}/ap_lavanda.jpg`,
      apartmentName: 'Lavanda'
    },
    {
      apartmentShortName: 'love-and-hope',
      apartmentImage: `${GlobalVariables.imagesPath}/ap_LandH.jpg`,
      apartmentName: 'Love & Hope'
    },
    {
      apartmentShortName: 'old-town',
      apartmentImage: `${GlobalVariables.imagesPath}/ap_old_town.jpg`,
      apartmentName: 'Apartment Dubrovnik Center'
    },
    {
      apartmentShortName: 'old-port',
      apartmentImage: `${GlobalVariables.imagesPath}/ap_old_port.jpg`,
      apartmentName: 'Old Port'
    },
  ];
  errorMessage: string;

  constructor(private  aptSer: ApartmentService,
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

  ngOnInit(): void {
    this.languageService.getLanguage();
  }

  getContent(language): void {
    const languagesContent = [
      {
        header: 'Welcome!',
        content: '<p>Welcome to our website, where we are excited to offer you a handful of accommodation options at our safe and cosy private apartments, ' +
          'located in the heart of the city’s old town, and in the most beautiful part of Dubrovnik, called Ploče.</p> ' +
          '<p>Booking with us can give you a peace of mind, as we will provide you with all the necessary information about ' +
          'available activities, must-see tourist attractions, the best viewing spots, all the local hidden gems, and we aim to be ' +
          'available any time of the day should you need our assistance. We can recommend you restaurants and bars, provide you with day ' +
          'trip ideas, or present you with airport transfer options, should you need help with anything.  </p>',
        language: 'eng'
      },
      {
        header: 'Dobro Nam Dosli!',
        content: '<p>Dobrodosli na nasu web stranicu. </p><p>Na ovoj web stranici vam nudimo privatni smejstaj u nasim apartmanima, ' +
          'na lokacijama u Starom Gradu i najljepsem dijelu Dubrovnika – Pločama.</p><p>Mi se takodjer brinemo o vasoj prtljazi, dolasku, ' +
          'odlasku. S nama mozete i organizirat transfer do apartmana. Na usluzi smo vam 24 sata dnevnom. Prilikom vaseg dolaska preporucavamo ' +
          'lokacije, znamenitosti, i aktivnosti koje ne smijete propustiti.</p>',
        language: 'cro'
      }
    ];
    this.landingPageContent = languagesContent.find((content) => { return content.language === language});
  }

  ngOnDestroy(): void {
    this.langSubscription.unsubscribe();
  }
}
