// Core
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// App specific
import { GoogleLineChartComponent } from './google-line-chart.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    GoogleLineChartComponent
  ],
  exports: [
    GoogleLineChartComponent
  ]
})
export class GoogleLineChartModule {
}
