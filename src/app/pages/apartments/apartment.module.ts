// Core
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

// App specific
import { ApartmentComponent } from './apartment.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [
    ApartmentComponent,
  ],
  exports: [
    ApartmentComponent,
  ]
})
export class ApartmentModule {
}
