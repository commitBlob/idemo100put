// Core
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// App Specific
import { LanguagesComponent } from './languages.component';

@NgModule({
  imports: [
    RouterModule,
    CommonModule
  ],
  declarations: [
    LanguagesComponent
  ],
  exports: [
    LanguagesComponent
  ],
})

export class LanguagesModule {
}
