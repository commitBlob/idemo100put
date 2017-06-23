// Core
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// App specific
import { ApartmentsPolicyComponent } from './apartments-policy.component';

@NgModule({
  imports: [
    CommonModule
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
