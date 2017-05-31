// Core
import { Routes, RouterModule } from '@angular/router';

// App specific
import { LavandaComponent } from './lavanda.component';
import { LavandaFacilitiesComponent } from './lavanda-facilities/lavanda-facilities.component';
import { LavandaPricelistComponent } from './lavanda-pricelist/lavanda-pricelist.component';


export const LavandaRoutes: Routes = [
  {
    path: '',
    component: LavandaComponent,
    pathMatch: 'full'
  },
  {
    path: 'facilities',
    component: LavandaFacilitiesComponent
  },
  {
    path: 'pricelist',
    component: LavandaPricelistComponent
  }
];
