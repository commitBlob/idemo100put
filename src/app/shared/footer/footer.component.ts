// Core
import { Component } from '@angular/core';

// Moment
import * as moment from 'moment/moment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {

  currentYear = '';

  constructor() {
    this.currentYear = moment().format('YYYY');
  }
}
