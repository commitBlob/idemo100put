// Core
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// App specific
import { LavandaComponent } from './lavanda.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LavandaComponent
  ],
  exports: [
    LavandaComponent
  ]
})
export class LavandaModule {
}
