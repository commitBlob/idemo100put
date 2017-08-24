// Core
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// App specific
import { LocationComponent } from './location.component';
import { LocationDataService } from './location-data/location-data.service';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    LocationComponent
  ],
  exports: [
    LocationComponent
  ],
  providers: [
    LocationDataService
  ],
})
export class LocationModule {
}
