// Core
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// App specific
import { AboutUsComponent } from '../shared/about-us/about-us.component';
import { ApartmentComponent } from './apartment.component';
import { ApartmentRoutes } from './apartment.routes';
import { ContactUsComponent } from '../shared/contact-us/contact-us.component';
import { CroatiaFactsComponent } from '../shared/croatia-facts/croatia-facts.component';
import { DubrovnikFactsComponent } from '../shared/dubrovnik-facts/dubrovnik-facts.component';
import { LocationComponent } from '../shared/location/location.component';
import { SurroundingsComponent } from '../shared/surroundings/surroundings.component';
import { ApartmentsPolicyComponent } from '../shared/apartments-policy/apartments-policy.component';
import { NavigationBuilderComponent } from '../shared/navigation/navigation-builder.component';

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
    NavigationBuilderComponent,
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
