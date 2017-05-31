// Core
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// App specific
import { ApartmentComponent } from './apartment.component';
import { ApartmentRoutes } from './apartment.routes';
import { LoveAndHopeComponent } from './love-and-hope/love-and-hope.component';
import { OldPortComponent } from './old-port/old-port.component';
import { OldTownComponent } from './old-town/old-town.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(ApartmentRoutes)
  ],
  declarations: [
    ApartmentComponent,
    LoveAndHopeComponent,
    OldPortComponent,
    OldTownComponent
  ],
  exports: [
    ApartmentComponent,
    LoveAndHopeComponent,
    OldPortComponent,
    OldTownComponent
  ]
})
export class ApartmentModule {
}
