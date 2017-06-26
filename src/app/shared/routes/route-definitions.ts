// Core
import { Routes } from '@angular/router';

// App specific
import { LandingPageComponent } from '../../landing-page/landing-page.component';
import { PageNotFoundComponent } from '../../page-not-found/page-not-found.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: LandingPageComponent },
  { path: '+apartments', loadChildren: './+apartments/apartment.module#ApartmentModule', data: { preload: true } },
  { path: '**', component: PageNotFoundComponent },
];
