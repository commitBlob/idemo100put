// Core
import { Routes } from '@angular/router';

// App specific
import { ApartmentComponent } from '../../pages/apartments/apartment.component';
import { LandingPageComponent } from '../../pages/landing-page/landing-page.component';
import { PageNotFoundComponent } from '../../pages/page-not-found/page-not-found.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: LandingPageComponent },
  // { path: 'apartments', component: ApartmentComponent },
  { path: '**', component: PageNotFoundComponent },
];
