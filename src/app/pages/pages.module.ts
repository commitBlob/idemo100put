// Core
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

// App specific
import { AboutUsComponent } from './about-us/about-us.component';
import { ApartmentComponent } from './apartments/apartment.component';
import { ApartmentsPolicyComponent } from './apartments-policy/apartments-policy.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CroatiaFactsComponent } from './croatia-facts/croatia-facts.component';
import { DubrovnikFactsComponent } from './dubrovnik-facts/dubrovnik-facts.component';
import { LocationComponent } from './location/location.component';
import { SurroundingsComponent } from './surroundings/surroundings.component';

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
  declarations: [
    AboutUsComponent,
    ApartmentComponent,
    ApartmentsPolicyComponent,
    ContactUsComponent,
    CroatiaFactsComponent,
    DubrovnikFactsComponent,
    LocationComponent,
    SurroundingsComponent
  ]
})
export class PagesModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: PagesModule,
      providers: [
      ]};
  }
}
