// Core
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// App specific
import { DubrovnikFactsWeRecommendComponent } from './dubrovnik-facts-we-recommend.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DubrovnikFactsWeRecommendComponent
  ],
  exports: [
    DubrovnikFactsWeRecommendComponent
  ]
})
export class DubrovnikFactsWeRecommendModule {
}
