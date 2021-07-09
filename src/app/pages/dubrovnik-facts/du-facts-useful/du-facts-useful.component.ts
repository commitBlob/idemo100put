// Core
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

// App specific
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

  constructor(private languageService: LanguagesService) {
    this.langSubscription = languageService.subjectSourceAnnounced$.subscribe(
      (value) => {
        if (this.language !== value) {
          this.language = value;
          this.getContent(this.language);
        }
      }
    );
  }

  getContent(language): void {
    const usefulContent: Content[] = [
      {
        header: 'Airport Dubrovnik',
        language: 'eng',
        content: 'https://www.airport-dubrovnik.hr/en'
      },
      {
        header: 'Zračna Luka Dubrovnik',
        language: 'cro',
        content: 'https://www.airport-dubrovnik.hr/'
      },
      {
        header: 'Libertas City Bus Timetable',
        language: 'eng',
        content: 'https://www.libertasdubrovnik.hr/city-timetable/'
      },
      {
        header: 'Libertas Gradski Vozni Red',
        language: 'cro',
        content: 'https://www.libertasdubrovnik.hr/gradski-raspored/'
      },
      {
        header: 'Jadrolinija Dubrovnik',
        language: 'cro',
        content: 'https://www.jadrolinija.hr/o-nama/brodovi/trajekti/trajekti-za-duzobalne-i-medjunarodne-linije/dubrovnik'
      },
      {
        header: 'Jadrolinija Ferry Dubrovnik',
        language: 'eng',
        content: 'https://www.jadrolinija.hr/en/about-us/ships/ferries/ferries-for-coastal-and-international-shipping/dubrovnik'
      }
    ];
    this.duFactsUsefulContent = usefulContent.filter(records => records.language === language);
  }

  ngOnInit(): void {
    this.languageService.getLanguage();
  }

  ngOnDestroy(): void {
    this.langSubscription.unsubscribe();
  }
}
