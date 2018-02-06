// Core
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// App specific
import { GoogleColumnComponent } from './google-column.component';

// App specific

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    GoogleColumnComponent
  ],
  exports: [
    GoogleColumnComponent
  ]
})
export class GoogleColumnModule {
}
