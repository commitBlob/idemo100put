// Core
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

// App specific
import { LanguagesService } from '../../shared/languages/languages.service';

// Models
import { Content } from '../../shared/content-service/content.interface';

@Component({
  templateUrl: './surroundings.component.html',
})
export class SurroundingsComponent implements OnInit, OnDestroy {

  surroundingsContent: Content;
  langSubscription: Subscription;
  language: String;

  constructor(
    private languageService: LanguagesService
  ) {
    this.langSubscription = languageService.subjectSourceAnnounced$.subscribe(
      (value) => {
        if ( this.language !== value) {
          this.language = value;
          this.getContent(this.language);
        }
      }
    );
  }

  public ngOnInit() {
    this.languageService.getLanguage();
  }

  public getContent(language) {
    const languagesContent: Content[] = [
      {
        header: 'Surroundings',
        content: '<p>Spending your holidays in the place like Dubrovnik, where you can glaze down on the charmingly ' +
          'captivating orange-roofed Old Town surrounded by mesmerising blue sea, ' +
          'while looking up you can be fascinated by beautiful mountains, you might feel like you ' +
          'want to stay here forever.</p><p>While Dubrovnik, indeed, has a lot to offer, visiting some ' +
          'of its surroundings is definitely worthwhile.</p><p>Choose according to your interest, there is something ' +
          'out there for everyone. </p>',
        language: 'eng'
      },
      {
        header: 'Okolica',
        content: '<p>Dubrovnik, biser Mediterana, predivni Grad, jednom riječi poseban; Mnoge ostavlja bez riječi, ' +
          'zahvaljujući svojoj mističnosti, predivnom okruženju, čarobnom Starom Gradu i bogatoj povijesti. Poželili ' +
          'bih ste da možete ostati ovdje zauvijek.</p><p>Dok Dubrovnik uisitinu ima mnogo za ponudit, okolica vas ' +
          'sigurno neće razočarati.</p><p>Izaberite nešto po vlastitom interesu, u ponudi ima nešto za svakoga.</p>',
        language: 'cro'
      }
    ]
    this.surroundingsContent = languagesContent.find((text) => { return text.language === language});
  }

  public ngOnDestroy() {
    this.langSubscription.unsubscribe();
  }
}
