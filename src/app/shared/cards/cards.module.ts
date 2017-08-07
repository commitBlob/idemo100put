// Core
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// App specific
import { CardsComponent } from './cards.component';
import { SharedModule } from '../shared.module';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CardsComponent
  ],
  exports: [
    CardsComponent
  ]
})
export class CardsModule {
}
