// Core
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// App specific
import { ThingsToDoComponent } from './things-to-do.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ThingsToDoComponent
  ],
  exports: [
    ThingsToDoComponent
  ]
})
export class ThingsToDoModule {
}
