// Core
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// App specific
import { CroatiaFactsComponent } from './croatia-facts.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    CroatiaFactsComponent
  ],
  exports: [
    CroatiaFactsComponent
  ]
})
export class CroatiaFactsModule {
}
