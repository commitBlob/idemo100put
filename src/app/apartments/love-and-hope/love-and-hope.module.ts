// Core
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// App specific
import { LoveAndHopeComponent } from './love-and-hope.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoveAndHopeComponent
  ],
  exports: [
    LoveAndHopeComponent
  ]
})
export class LoveAndHopeModule {
}
