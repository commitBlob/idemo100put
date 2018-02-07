// Core
import { Component, HostListener, OnInit } from '@angular/core';

// App specific
declare const google: any;


@Component({
  selector: 'app-line-chart',
  templateUrl: './google-line-chart.component.html'
})
export class GoogleLineChartComponent implements OnInit {

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: any) {
    this.drawChart();
  }

  ngOnInit() {
    google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(this.drawChart);
  }

  drawChart() {

    const data = new google.visualization.arrayToDataTable([
      ['Month', 'Average Low', 'Average High'],
      ['Jan', {v: 6.5, f: '6.5°C'}, {v: 12.2, f: '12.2°C'}],
      ['Feb', {v: 6.4, f: '6.4°C'}, {v: 12.3, f: '12.3°C'}],
      ['Mar', {v: 8.5, f: '8.5°C'}, {v: 14.4, f: '14.4°C'}],
      ['Apr', {v: 10.9, f: '10.9°C'}, {v: 16.9, f: '16.9°C'}],
      ['May', {v: 15.2, f: '15.2°C'}, {v: 21.2, f: '21.2°C'}],
      ['Jun', {v: 18.8, f: '18.8°C'}, {v: 25.2, f: '25.2°C'}],
      ['Jul', {v: 21.5, f: '21.5°C'}, {v: 28.3, f: '28.3°C'}],
      ['Aug', {v: 21.7, f: '21.7°C'}, {v: 28.8, f: '28.8°C'}],
      ['Sep', {v: 18.7, f: '18.7°C'}, {v: 25.2, f: '25.2°C'}],
      ['Oct', {v: 15.2, f: '15.2°C'}, {v: 21.2, f: '21.2°C'}],
      ['Nov', {v: 10.8, f: '10.8°C'}, {v: 16.6, f: '16.6°C'}],
      ['Dec', {v: 6.5, f: '6.5°C'}, {v: 12.2, f: '12.2°C'}],
    ]);

    const options = {
      title: 'Average Temperature',
      legend: 'none',
      hAxis: {
        title: 'Month',
      },
      vAxis: {
        title: 'Temperature in °C',
      },
      pointSize: 4,
    };

    const chart = new google.visualization.LineChart(document.getElementById('line-chart'));

    chart.draw(data, options);
  }
}
