// Core
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

// App specific
import { ApartmentModule } from './apartments/apartment.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  declarations: []
})
export class PagesModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: PagesModule,
      providers: [
      ]};
  }
}
