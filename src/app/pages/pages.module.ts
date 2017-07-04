// Core
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

// App specific
import { AboutUsComponent } from './about-us/about-us.component';
import { AboutUsModule } from './about-us/about-us.module';
import { ApartmentModule } from './apartments/apartment.module';
import { ApartmentComponent } from './apartments/apartment.component';
import { ApartmentsPolicyComponent } from './apartments-policy/apartments-policy.component';
import { ApartmentsPolicyModule } from './apartments-policy/apartments-policy.module';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ContactUsModule } from './contact-us/contact-us.module';
import { CroatiaFactsComponent } from './croatia-facts/croatia-facts.component';
import { CroatiaFactsModule } from './croatia-facts/croatia-facts.module';
import { DubrovnikFactsComponent } from './dubrovnik-facts/dubrovnik-facts.component';
import { DubrovnikFactsModule } from './dubrovnik-facts/dubrovnik-facts.module';
import { LocationComponent } from './location/location.component';
import { LocationModule } from './location/location.module';
import { SharedModule } from '../shared/shared.module';
import { SurroundingsComponent } from './surroundings/surroundings.component';
import { SurroundingsModule } from './surroundings/surroundings.module';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    AboutUsModule,
    ApartmentModule,
    ApartmentsPolicyModule,
    ContactUsModule,
    CroatiaFactsModule,
    DubrovnikFactsModule,
    LocationModule,
    SurroundingsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
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
