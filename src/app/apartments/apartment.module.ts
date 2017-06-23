// Core
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// App specific
import { AboutUsComponent } from '../about-us/about-us.component';
import { ApartmentComponent } from './apartment.component';
import { ApartmentRoutes } from './apartment.routes';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { CroatiaFactsComponent } from '../croatia-facts/croatia-facts.component';
import { DubrovnikFactsComponent } from '../dubrovnik-facts/dubrovnik-facts.component';
import { LocationComponent } from '../location/location.component';
import { SurroundingsComponent } from '../surroundings/surroundings.component';
import { ApartmentsPolicyComponent } from '../apartments-policy/apartments-policy.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild(ApartmentRoutes)
  ],
  declarations: [
    AboutUsComponent,
    ApartmentComponent,
    ApartmentsPolicyComponent,
    ContactUsComponent,
    CroatiaFactsComponent,
    DubrovnikFactsComponent,
    LocationComponent,
    SurroundingsComponent,

  ],
  exports: [
    AboutUsComponent,
    ApartmentComponent,
    ApartmentsPolicyComponent,
    ContactUsComponent,
    CroatiaFactsComponent,
    DubrovnikFactsComponent,
    LocationComponent,
    MaterialModule,
    SurroundingsComponent,
  ]
})
export class ApartmentModule {
}
