// Core
import { Component, OnInit } from '@angular/core';

// App specific
import { ContentService } from '../../../shared/content-service/content.service';

@Component({
  selector: 'app-du-facts-busy',
  templateUrl: './du-facts-busiest-months.component.html'
})
export class DuFactsBusiestMonthsComponent implements  OnInit{

  constructor(private contentService: ContentService) {
  }

  ngOnInit() {
  }
}
