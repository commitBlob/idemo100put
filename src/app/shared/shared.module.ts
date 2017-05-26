import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {SharedRoutes} from './shared.routes';
import {SharedComponent} from './shared.component';
import {ApartmentComponent} from '../apartments/apartment.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(SharedRoutes)],
  declarations: [
    SharedComponent,
    ApartmentComponent
    ],
  exports: [SharedComponent],
  providers: [
]
})
export class SharedModule {}
