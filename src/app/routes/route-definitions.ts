import { Routes } from '@angular/router';
import { LandingPageComponent } from '.././landing-page/landing-page.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: LandingPageComponent },
  { path: '**', component: PageNotFoundComponent },
];

