// Core
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// App specific
import {DubrovnikFactsComponent} from './dubrovnik-facts.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DubrovnikFactsComponent
  ],
  exports: [
    DubrovnikFactsComponent
  ]
})
export class DubrovnikFactsModule {
}
