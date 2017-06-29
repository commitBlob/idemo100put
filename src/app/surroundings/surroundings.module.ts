// Core
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// App specific
import { SurroundingsComponent } from './surroundings.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SurroundingsComponent
  ],
  exports: [
    SurroundingsComponent
  ]
})
export class SurroundingsModule {
}
