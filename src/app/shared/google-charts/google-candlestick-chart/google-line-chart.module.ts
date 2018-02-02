// Core
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// App specific
import { GoogleLineChartComponent } from './average-temperature-chart/google-line-chart.component';
import { RainfallLineChartComponent } from './average-rainfall-chart/rainfall-line-chart.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    GoogleLineChartComponent,
    RainfallLineChartComponent
  ],
  exports: [
    GoogleLineChartComponent,
    RainfallLineChartComponent
  ]
})
export class GoogleLineChartModule {
}
