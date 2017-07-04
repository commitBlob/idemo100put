// Core
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// App specific
import { DubrovnikFactsComponent } from './dubrovnik-facts.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
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
