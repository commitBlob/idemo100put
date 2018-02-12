// Core
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// App specific
import { ThingsToDoDetailsComponent } from './things-to-do-details.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ThingsToDoDetailsComponent
  ],
  exports: [
    ThingsToDoDetailsComponent
  ]
})
export class ThingsToDoDetailsModule {
}
