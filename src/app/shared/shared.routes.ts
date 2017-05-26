import { Route } from '@angular/router';

import { SharedComponent } from './shared.component';
import { ApartmentComponent } from '../apartments/apartment.component';


export const SharedRoutes: Route[] = [
  {
    path: 'shared',
    component: SharedComponent,
    children: [
      {
        path: '',
        component: ApartmentComponent,
        pathMatch: 'full'
      }
      // ,{
      //  Ovdje ce ici ostale stranice (about us, Croataia facts, Dubrovnik facts ....)
      // }
    ]
  }
];
