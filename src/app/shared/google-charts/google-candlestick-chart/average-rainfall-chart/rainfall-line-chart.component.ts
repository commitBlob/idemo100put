// Core
import { Component, HostListener, OnInit } from '@angular/core';

// App specific
declare const google: any;

@Component({
  selector: 'app-rainfall-chart',
  templateUrl: './rainfall-line-chart.component.html'
})
export class RainfallLineChartComponent implements OnInit {

  ngOnInit() {
    google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(this.drawChart);
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: any) {
    this.drawChart();
  }

  drawChart() {
    const data = new google.visualization.arrayToDataTable([
      ['Month', 'Rainfall'],
      ['Jan', {v: 95, f: '95mm'}],
      ['Feb', {v: 89, f: '89mm'}],
      ['Mar', {v: 97, f: '97mm'}],
      ['Apr', {v: 90, f: '90mm'}],
      ['May', {v: 76, f: '76mm'}],
      ['Jun', {v: 48, f: '48mm'}],
      ['Jul', {v: 24, f: '24mm'}],
      ['Aug', {v: 58, f: '58mm'}],
      ['Sep', {v: 78, f: '78mm'}],
      ['Oct', {v: 110, f: '110mm'}],
      ['Nov', {v: 142, f: '142mm'}],
      ['Dec', {v: 125, f: '125mm'}],
    ]);

    const options = {
      title: 'Average Precipitation ',
      legend: 'none',
      hAxis: {
        title: 'Month',
      },
      vAxis: {
        title: 'Rainfall in mm',
      },
    };

    const chart = new google.visualization.LineChart(document.getElementById('rainfall-line-chart'));

    chart.draw(data, options);
  }
}
