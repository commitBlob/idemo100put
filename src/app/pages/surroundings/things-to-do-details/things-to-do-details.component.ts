// Core
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

// App specific
import { LanguagesService } from '../../../shared/languages/languages.service';
import { ThingsToDoService } from '../things-to-do/things-to-do.service';

// Models
import { ThingsToDo } from '../things-to-do/things-to-do.interface';


@Component({
  selector: 'app-ttd-details',
  templateUrl: './things-to-do-details.component.html'
})
export class ThingsToDoDetailsComponent implements OnInit, OnDestroy {

  attractionContent: ThingsToDo[];
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
        }
      }
    );
  }

  getContent(language, attraction) {
    this.activityService.getActivity(language, attraction).subscribe(
      (content) => {
        // check if there is any content returned. If not redirect to 404 page
        if (content.length === 0) {
          this.router.navigate(['/four-oh-four']);
        } else {
          this.attractionContent = <ThingsToDo[]>content;
          this.getBannerImage(this.attractionContent[0].shortName);
        }
      }
    );
  }

  getBannerImage(shortName) {
    this.activityService.getBanner(shortName).subscribe(
      (bannerObject) => {
        this.bannerImage = bannerObject[0].image;
      });
  }

  generateBannerImage(image) {
    return 'data:image/png;base64,' + image;
  }

  navigateBack() {
    this.router.navigate(['surroundings']);
  }

  ngOnInit() {
    this.languageService.getLanguage();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    this.langSubscription.unsubscribe();
  }
}
