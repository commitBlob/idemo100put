import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApartmentComponent } from './apartment.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ApartmentComponent],
  exports: [ApartmentComponent]
})
export class ApartmentModule {
}
