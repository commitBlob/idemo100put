// Core
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// App specific
import { OldPortComponent } from './old-port.component';
import { OldPortFacilitiesComponent } from './old-port-facilities/old-port-facilities.component';
import { OldPortPricelistComponent } from './old-port-pricelist/old-port-pricelist.component';
import { OldPortRoutes } from './old-port.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(OldPortRoutes)
  ],
  declarations: [
    OldPortComponent,
    OldPortFacilitiesComponent,
    OldPortPricelistComponent,
  ],
  exports: [
    OldPortComponent,
    OldPortFacilitiesComponent,
    OldPortPricelistComponent
  ]
})
export class OldPortModule {
}
