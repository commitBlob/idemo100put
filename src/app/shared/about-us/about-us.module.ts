// Core
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// App specific
import { AboutUsComponent } from './about-us.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AboutUsComponent
  ],
  exports: [
    AboutUsComponent
  ]
})
export class AboutUsModule {
}
