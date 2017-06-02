// Core
import { Routes } from '@angular/router';

// App specific
import { LandingPageComponent } from '.././landing-page/landing-page.component';
// import { NavigationBuilderComponent } from '../shared/navigation/navigation-builder.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: LandingPageComponent },
  { path: 'apartments', loadChildren: './apartments/apartment.module#ApartmentModule', data: { preload: true } },
  { path: 'lavanda', loadChildren: './apartments/lavanda/lavanda.module#LavandaModule' },
  { path: 'love-and-hope', loadChildren: './apartments/love-and-hope/love-and-hope.module#LoveAndHopeModule' },
  { path: 'old-port', loadChildren: './apartments/old-port/old-port.module#OldPortModule'},
  { path: 'old-town', loadChildren: './apartments/old-town/old-town.module#OldTownModule'},
  // { path: 'test-nav', component: NavigationBuilderComponent },
  { path: '**', component: PageNotFoundComponent },
];
