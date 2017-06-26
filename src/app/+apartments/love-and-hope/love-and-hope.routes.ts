// Core
import { Routes, RouterModule } from '@angular/router';

// App specific
import { LoveAndHopeComponent } from './love-and-hope.component';
import { LoveAndHopeFacilitiesComponent } from './love-and-hope-facilities/love-and-hope-facilities.component';
import { LoveAndHopePricelistComponent } from './love-and-hope-pricelist/love-and-hope-pricelist.component';

export const LoveAndHopeRoutes: Routes = [
  {
    path: '',
    component: LoveAndHopeComponent,
    pathMatch: 'full'
  },
  {
    path: 'facilities',
    component: LoveAndHopeFacilitiesComponent
  },
  {
    path: 'pricelist',
    component: LoveAndHopePricelistComponent
  }
];
