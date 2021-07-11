// Core
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

// App specific
import { GlobalVariables } from '../../../globals';
import { LanguagesService } from '../../../shared/languages/languages.service';
import { ThingsToDoService } from '../things-to-do/things-to-do.service';
import { todoContent } from '../things-to-do/things-to-do.content';

// Models
import { ThingsToDo } from '../things-to-do/things-to-do.interface';

@Component({
  selector: 'app-ttd-details',
  templateUrl: './things-to-do-details.component.html'
})
export class ThingsToDoDetailsComponent implements OnInit, OnDestroy {

  attractionContent: ThingsToDo;
  sideTableContent;
  langSubscription: Subscription;
  language: String;
  attraction: string;
  bannerImage: string;

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
          // this.getSideTable(value, this.attraction);
        }
      }
    );
  }

  getContent(language, attraction) {
    this.attractionContent = todoContent.find(toDo => toDo.language === language && toDo.shortName === attraction);
    this.bannerImage = `${GlobalVariables.imagesPath}/banners/${attraction}.png`;
  }

  getSideTable(language, attraction) {
    this.activityService.getSideTable(language, attraction).subscribe(
      (content) => {
        if (content.length) {
          this.sideTableContent = content[0].tableData;
        }
      }
    );
  }

  generateArray(obj): Object {
    return Object.keys(obj).map((key) => { return {key: key, value: obj[key]}});
  }

  navigateBack(): void {
    this.router.navigate(['surroundings']);
  }

  ngOnInit(): void {
    this.languageService.getLanguage();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
    this.langSubscription.unsubscribe();
  }
}
