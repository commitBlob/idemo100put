// Core
import { MatDialogRef } from '@angular/material';
import { Component } from '@angular/core';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: 'confirm-dialog.component.html'
})
export class ConfirmDialogComponent {

  public title: string;
  public message: string;

  constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>) {

  }
}
