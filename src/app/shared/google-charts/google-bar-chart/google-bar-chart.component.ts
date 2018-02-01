// Core
import { Component, OnInit } from '@angular/core';

// App specific
declare const google: any;

@Component({
  selector: 'app-bar-chart',
  templateUrl: './google-bar-chart.component.html'
})
export class GoogleBarChartComponent implements OnInit {


  ngOnInit() {
    // google.charts.load('current', {'packages': ['corechart']});
    // google.charts.setOnLoadCallback();
  }
}
