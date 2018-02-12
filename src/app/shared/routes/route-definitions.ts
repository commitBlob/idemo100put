// Core
import { Routes } from '@angular/router';

// App specific
import { AboutUsComponent } from '../../pages/about-us/about-us.component';
import { ApartmentComponent } from '../../pages/apartments/apartment.component';
import { ApartmentsPolicyComponent } from '../../pages/apartments-policy/apartments-policy.component';
import { ContactUsComponent } from '../../pages/contact-us/contact-us.component';
import { CroatiaFactsComponent } from '../../pages/croatia-facts/croatia-facts.component';
import { DubrovnikFactsComponent } from '../../pages/dubrovnik-facts/dubrovnik-facts.component';
import { LandingPageComponent } from '../../pages/landing-page/landing-page.component';
import { LocationComponent } from '../../pages/location/location.component';
import { SurroundingsComponent } from '../../pages/surroundings/surroundings.component';
import { PageNotFoundComponent } from '../../pages/page-not-found/page-not-found.component';
import { ThingsToDoDetailsComponent } from '../../pages/surroundings/things-to-do-details/things-to-do-details.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: LandingPageComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'apartments', component: ApartmentComponent },
  { path: 'apartments/:apartmentName', component: ApartmentComponent },
  { path: 'policy', component: ApartmentsPolicyComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'cro-facts', component: CroatiaFactsComponent },
  { path: 'du-facts', component: DubrovnikFactsComponent },
  { path: 'location', component: LocationComponent },
  { path: 'surroundings', component: SurroundingsComponent },
  { path: 'surroundings/:activity', component: ThingsToDoDetailsComponent} ,
  { path: 'four-oh-four', component: PageNotFoundComponent },
  { path: '**', component: PageNotFoundComponent },
];
