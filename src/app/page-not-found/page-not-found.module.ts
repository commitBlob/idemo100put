// Core
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// App specific
import { PageNotFoundComponent } from './page-not-found.component';

@NgModule({
  imports: [CommonModule],
  declarations: [PageNotFoundComponent],
  exports: [PageNotFoundComponent]
})
export class PageNotFoundModule {
}
