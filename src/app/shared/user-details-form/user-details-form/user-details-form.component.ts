// Core
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// App specific

@Component({
  selector: 'user-details-form',
  templateUrl: './user-details-form.component.html',
})
export class UserDetailsFormComponent implements OnInit {

  private datesSelected: any;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.datesSelected = params);
  }

  ngOnInit() {
    console.log(this.datesSelected, 'dates selected');
  }

}
