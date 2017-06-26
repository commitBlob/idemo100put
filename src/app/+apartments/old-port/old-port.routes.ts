// Core
import { Routes, RouterModule } from '@angular/router';

// App specific
import { OldPortComponent } from './old-port.component';
import { OldPortFacilitiesComponent } from './old-port-facilities/old-port-facilities.component';
import { OldPortPricelistComponent } from './old-port-pricelist/old-port-pricelist.component';

export const OldPortRoutes: Routes = [
  {
    path: '',
    component: OldPortComponent,
    pathMatch: 'full'
  },
  {
    path: 'facilities',
    component: OldPortFacilitiesComponent
  },
  {
    path: 'pricelist',
    component: OldPortPricelistComponent
  }
];
