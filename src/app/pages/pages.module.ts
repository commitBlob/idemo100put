// Core
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// App specific
import { AboutUsModule } from './about-us/about-us.module';
import { ApartmentModule } from './apartments/apartment.module';
import { ApartmentsPolicyModule } from './apartments-policy/apartments-policy.module';
import { ContactUsModule } from './contact-us/contact-us.module';
import { CroatiaFactsModule } from './croatia-facts/croatia-facts.module';
import { DubrovnikFactsModule } from './dubrovnik-facts/dubrovnik-facts.module';
import { LocationModule } from './location/location.module';
import { SharedModule } from '../shared/shared.module';
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
}
