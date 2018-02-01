// Core
import { Component, OnInit, ViewChild } from '@angular/core';

// App specific
declare const google: any;

@Component({
  selector: 'app-column-chart',
  templateUrl: './google-column.component.html'
})
export class GoogleColumnComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(this.drawChart);
  }

  drawChart() {

    // const data = new google.visualization.DataTable();
    // data.addColumn('string', 'Month of the Year');
    // data.addColumn('number', 'Visitors Level');
    // data.addRows([
    //   [{v: 'Jan'}, 2],
    //   [{v: 'Feb'}, 1],
    //   [{v: 'Mar'}, 1],
    //   [{v: 'Apr'}, 2],
    //   [{v: 'May'}, 3],
    //   [{v: 'Jun'}, 4],
    //   [{v: 'Jul'}, 4],
    //   [{v: 'Aug'}, 4],
    //   [{v: 'Sep'}, 3],
    //   [{v: 'Oct'}, 2],
    //   [{v: 'Nov'}, 1],
    //   [{v: 'Dec'}, 1],
    // ]);

    const data = new google.visualization.arrayToDataTable([
      ['Month of the Year', 'Visitors Level', { role: 'style' }],
        [{v: 'Jan'}, 1, '#34aadc'],
        [{v: 'Feb'}, 1, '#34aadc'],
        [{v: 'Mar'}, 1, '#34aadc'],
        [{v: 'Apr'}, 2, '#4cd964'],
        [{v: 'May'}, 3, '#fc0'],
        [{v: 'Jun'}, 4, '#ff3b30'],
        [{v: 'Jul'}, 4, '#ff3b30'],
        [{v: 'Aug'}, 4, '#ff3b30'],
        [{v: 'Sep'}, 3, '#fc0'],
        [{v: 'Oct'}, 2, '#4cd964'],
        [{v: 'Nov'}, 1, '#34aadc'],
        [{v: 'Dec'}, 2, '#4cd964'],
    ]);

    const options = {
      title: 'Visitors Amount Throughout the Year',
      hAxis: {
        title: 'Month',

      },
      vAxis: {
        title: 'Visitors Amount',
        ticks: [
          {v: 0, f: 'None'},
          {v: 1, f: 'Low'},
          {v: 2, f: 'Average'},
          {v: 3, f: 'Above Average'},
          {v: 4, f: 'High'}]
      }
    };

    const chart = new google.visualization.ColumnChart(document.getElementById('column-chart'));

    chart.draw(data, options);
  }
}
