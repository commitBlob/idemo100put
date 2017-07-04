// Core
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// App specific
import { ApartmentsPolicyComponent } from './apartments-policy.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    ApartmentsPolicyComponent
  ],
  exports: [
    ApartmentsPolicyComponent
  ]
})
export class ApartmentsPolicyModule {
}
