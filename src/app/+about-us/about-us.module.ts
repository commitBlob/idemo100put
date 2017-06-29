// Core
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// App specific
import { AboutUsComponent } from './about-us.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
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
