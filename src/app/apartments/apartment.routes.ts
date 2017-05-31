// Core
import { Routes, RouterModule } from '@angular/router';

// App specific
import { AboutUsComponent } from '../shared/about-us/about-us.component';
import { ApartmentComponent } from './apartment.component';
import { ApartmentsPolicyComponent } from '../shared/apartments-policy/apartments-policy.component';
import { ContactUsComponent } from '../shared/contact-us/contact-us.component';
import { CroatiaFactsComponent } from '../shared/croatia-facts/croatia-facts.component';
import { DubrovnikFactsComponent } from '../shared/dubrovnik-facts/dubrovnik-facts.component';
import { LocationComponent } from '../shared/location/location.component';
import { SurroundingsComponent } from '../shared/surroundings/surroundings.component';

export const ApartmentRoutes: Routes = [
  {
    path: '',
    component: ApartmentComponent,
    pathMatch: 'full'
  },
  {
    path: 'policy',
    component: ApartmentsPolicyComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'contact-us',
    component: ContactUsComponent
  },
  {
    path: 'cro-facts',
    component: CroatiaFactsComponent
  },
  {
    path: 'du-facts',
    component: DubrovnikFactsComponent,
  },
  {
    path: 'location',
    component: LocationComponent
  },
  {
    path: 'surroundings',
    component: SurroundingsComponent
  },
];
