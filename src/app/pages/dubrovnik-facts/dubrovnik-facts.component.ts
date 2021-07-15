// Core
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

// App specific
import { LanguagesService } from '../../shared/languages/languages.service';

// Models
import { Content } from '../../shared/content-service/content.interface';

@Component({
  templateUrl: './dubrovnik-facts.component.html',
})
export class DubrovnikFactsComponent implements OnInit, OnDestroy {

  dubrovnikFactsContent: Content;
  langSubscription: Subscription;
  language: String;
  mode: any;
  displayColumnChart: boolean = true;
  displayBarChart: boolean = false;

  constructor(private languageService: LanguagesService) {
    this.langSubscription = languageService.subjectSourceAnnounced$.subscribe(
      (value) => {
        if ( this.language !== value) {
          this.language = value;
          this.getContent(this.language);
        }
      }
    );
  }

  ngOnInit() {
    this.languageService.getLanguage();
  }

  getContent(language) {
    const duText: Content[] = [
      {
        content: '<p>Dubrovnik is most famous for the sunny weather, stunning beaches, and clear sea, but it also has very rich cultural diversity. ' +
          'Old Town, surrounded by 2 kilometres of city walls, is dating from the 7th century, and one can find plenty of museums, monuments, and ' +
          'galleries built in baroque style. The most famous of all them is Rector\'s Palace, which is highly recommended to visit.</p><p>We would ' +
          'also recommend visiting island Lokrum, taking a ride with the cable car to the top of Srd hill, going on a trip to the small town of ' +
          'Cavtat, and many other activities.,</p><p>Come and enjoy our city and its surroundings. We are here to help should you need any assistance' +
          ' during your stay.</p>',
        language: 'eng',
        header: 'Dubrovnik Facts'
      },
      {
        content: '<p>Dragi gosti, ono što je posebno za vidjeti u Dubrovniku je Stari Grad. Povijest starog dijela Dubrovnika potječe iz 7 st. tako ' +
          'da u našem Gradu imamo mnoge znamenitosti kao najstariju apoteku u Evropi iz 15st. Zatim jednu od najstarijih sinagoga u Evropi. ' +
          'Također Dubrovnik obiluje prekrasnim muzejima od kojih je najpoznatiji muzej Knežev dvor. U staroj gradskoj jezgri se nalazi i pomorski ' +
          'muzej jer Dubrovnik ima veliku tradiciju pomorstva, također muzej Rupe, Prirodoslovni muzej, galerije...</p><p>Ono što se obavezno treba ' +
          'vidjeti je glavna ulica Stradun, gradske zidine, otok Lokrum, žičara... Ovisno o Vašem boravku definitivno napravite mjesta za otok ' +
          'Korčulu gdje možete uživati u vinskim cestama, i vidjeti kuću Marka Pola. Također možete napraviti izlet za Elafitske otoke, nacionalni ' +
          'park Mljet, jer u okolici Dubrovnika imamo mnogo prekrasnih otoka. Možete posjeti i prekrasan mali gradić Cavtat udaljen svega 18km od ' +
          'Dubrovnika.</p><p>Prilikom Vašeg dolaska ćemo Vam preporučiti i dobra mjesta gdje se može nešto pojesti, dobra mjesta za ' +
          'kupanje, pokazati cemo Vam i lokacije gdje su snimani filmovi kao npr. Zvijezdane staze, Robin Hood, Igre prijestolja i mnogi drugi</p><p>' +
          'Dođite i uživajte u našem Gradu. Mi smo tu za bilo kakvu pomoć za vrijeme Vašeg boravka.</p>',
        language: 'cro',
        header: 'O Dubrovniku'
      }
    ]
    this.dubrovnikFactsContent = duText.find(record => record.language === language);
  }

  ngOnDestroy() {
    this.langSubscription.unsubscribe();
  }
}
