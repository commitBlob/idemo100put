// Core
import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// App specific
import { GoogleMapsComponent } from './google-maps.component';
import { GlobalVariables } from '../../globals';


@NgModule({
  imports: [
    AgmCoreModule.forRoot({
      apiKey: GlobalVariables.GOOGLE_MAPS_API_KEY
    }),
    CommonModule
  ],
  declarations: [
    GoogleMapsComponent
  ],
  exports: [
    GoogleMapsComponent
  ]
})
export class GoogleMapsModule {
}
