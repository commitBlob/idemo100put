// Core
import { Routes, RouterModule } from '@angular/router';

// App specific
import { ApartmentComponent } from './apartment.component';
import { LoveAndHopeComponent } from './love-and-hope/love-and-hope.component';
import {LavandaComponent} from './lavanda/lavanda.component';
import {OldPortComponent} from './old-port/old-port.component';
import {OldTownComponent} from './old-town/old-town.component';

export const ApartmentRoutes: Routes = [
  {
    path: '',
    component: ApartmentComponent,
    pathMatch: 'full'
  },
  {
    path: 'love-and-hope',
    component: LoveAndHopeComponent,
  },
  {
    path: 'lavanda',
    component: LavandaComponent
  },
  {
    path: 'old-port',
    component: OldPortComponent
  },
  {
    path: 'old-town',
    component: OldTownComponent
  },
];
