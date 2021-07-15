// Core
import { Component, HostListener, OnInit } from '@angular/core';

// App specific
declare const google: any;

@Component({
  selector: 'app-bar-chart',
  templateUrl: './google-bar-chart.component.html'
})
export class GoogleBarChartComponent implements OnInit {

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: any) {
    this.drawChart();
  }



  drawChart() {
    const data = google.visualization.arrayToDataTable([
      ['Month of the Year', 'Visitors Level', { role: 'style' }],
      [{v: 'Jan'}, {v: 1, f: 'Low'}, '#34aadc'],
      [{v: 'Feb'}, {v: 1, f: 'Low'}, '#34aadc'],
      [{v: 'Mar'}, {v: 1, f: 'Low'}, '#34aadc'],
      [{v: 'Apr'}, {v: 2, f: 'Average'}, '#4cd964'],
      [{v: 'May'}, {v: 3, f: 'Above Average'}, '#fc0'],
      [{v: 'Jun'}, {v: 4, f: 'High'}, '#ff3b30'],
      [{v: 'Jul'}, {v: 4, f: 'High'}, '#ff3b30'],
      [{v: 'Aug'}, {v: 4, f: 'High'}, '#ff3b30'],
      [{v: 'Sep'}, {v: 3, f: 'Above Average'}, '#fc0'],
      [{v: 'Oct'}, {v: 2, f: 'Average'}, '#4cd964'],
      [{v: 'Nov'}, {v: 1, f: 'Low'}, '#34aadc'],
      [{v: 'Dec'}, {v: 2, f: 'Average'}, '#4cd964'],
    ]);

    const options = {
      hAxis: {
        title: 'Visitors Amount',

      },
      vAxis: {
        title: 'Month',
        ticks: [
          {v: 0, f: 'None'},
          {v: 1, f: 'Low'},
          {v: 2, f: 'Average'},
          {v: 3, f: 'Above Average'},
          {v: 4, f: 'High'}]
      },
      legend: 'none'
    };

    const chart = new google.visualization.BarChart(document.getElementById('bar-chart'));

    chart.draw(data, options);
  }

  ngOnInit() {
    google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(this.drawChart);
  }
}
