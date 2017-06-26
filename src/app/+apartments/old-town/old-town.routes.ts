// Core
import { Routes, RouterModule } from '@angular/router';

// App specific
import { OldTownComponent } from './old-town.component';
import { OldTownFacilitiesComponent } from './old-town-facilities/old-town-facilities.component';
import { OldTownPricelistComponent } from './old-town-pricelist/old-town-pricelist.component';

export const OldTownRoutes: Routes = [
  {
    path: '',
    component: OldTownComponent,
    pathMatch: 'full'
  },
  {
    path: 'facilities',
    component: OldTownFacilitiesComponent
  },
  {
    path: 'pricelist',
    component: OldTownPricelistComponent
  }
];
