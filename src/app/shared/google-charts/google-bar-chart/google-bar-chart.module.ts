// Core
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// App specific
import { GoogleBarChartComponent } from './google-bar-chart.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    GoogleBarChartComponent
  ],
  exports: [
    GoogleBarChartComponent
  ]
})
export class GoogleBarChartModule {
}
