// Core
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// App specific
import { SurroundingsComponent } from './surroundings.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
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
