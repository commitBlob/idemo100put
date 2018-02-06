// Core
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// App specific
import { DuFactsUsefulComponent } from './du-facts-useful.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DuFactsUsefulComponent
  ],
  exports: [
    DuFactsUsefulComponent
  ]
})
export class DuFactsUsefulModule {
}
