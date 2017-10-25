// Core
import { MdDialogRef } from '@angular/material';
import { Component } from '@angular/core';

@Component({
  selector: 'app-booking-dialog',
  templateUrl: 'booking-dialog.component.html'
})
export class BookingDialogComponent {

  public title: string;
  public message: string;
  public oneNight: boolean;

  constructor(public dialogRef: MdDialogRef<BookingDialogComponent>) {

  }
}
