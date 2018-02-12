// Core
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

// App specific
import { LanguagesService } from '../../../shared/languages/languages.service';
import { ThingsToDoService } from '../things-to-do/things-to-do.service';

// Models
import { ThingsToDo } from '../things-to-do/things-to-do.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ttd-details',
  templateUrl: './things-to-do-details.component.html'
})
export class ThingsToDoDetailsComponent implements OnInit, OnDestroy {

  attractionContent: ThingsToDo[];
  langSubscription: Subscription;
  language: String;
  attraction: string;

  private sub: Subscription;


  constructor(private languageService: LanguagesService,
              private activityService: ThingsToDoService,
              private route: ActivatedRoute,
              private router: Router) {
    this.sub = this.route.params.subscribe(params => {
      this.attraction = params['activity'];
    });

    this.langSubscription = languageService.subjectSourceAnnounced$.subscribe(
      (value) => {
        if (this.language !== value) {
          this.language = value;
          this.getContent(value, this.attraction);
        }
      }
    );
  }

  getContent(language, attraction) {
    this.activityService.getActivity(language, attraction).subscribe(
      (content) => {
        console.log('Content: ', content);
        if (content.length === 0) {
          this.router.navigate(['/four-oh-four']);
        }
      }
    );
  }

  ngOnInit() {
    this.languageService.getLanguage();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    this.langSubscription.unsubscribe();
  }
}
