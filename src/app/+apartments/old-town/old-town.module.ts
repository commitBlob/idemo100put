// Core
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// App specific
import { OldTownComponent } from './old-town.component';
import { OldTownFacilitiesComponent } from './old-town-facilities/old-town-facilities.component';
import { OldTownPricelistComponent } from './old-town-pricelist/old-town-pricelist.component';
import { OldTownRoutes } from './old-town.routes';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(OldTownRoutes)
  ],
  declarations: [
    OldTownComponent,
    OldTownFacilitiesComponent,
    OldTownPricelistComponent
  ],
  exports: [
    MaterialModule,
    OldTownComponent,
    OldTownFacilitiesComponent,
    OldTownPricelistComponent
  ]
})
export class OldTownModule {
}
