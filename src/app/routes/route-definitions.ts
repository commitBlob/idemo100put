import { Routes } from '@angular/router';
import { LandingPageComponent } from '.././landing-page/landing-page.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { ApartmentComponent } from '../apartments/apartment.component';
import { LoveAndHopeComponent } from '../apartments/love-and-hope/love-and-hope.component';
import { LavandaComponent } from '../apartments/lavanda/lavanda.component';
import { OldTownComponent } from '../apartments/old-town/old-town.component';
import { OldPortComponent } from '../apartments/old-port/old-port.component';


export const appRoutes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: LandingPageComponent },
  { path: 'general', component: ApartmentComponent },
  { path: 'love-and-hope', component: LoveAndHopeComponent },
  { path: 'lavanda', component: LavandaComponent },
  { path: 'old-town', component: OldTownComponent },
  { path: 'old-port', component: OldPortComponent },
  { path: '**', component: PageNotFoundComponent },
];

