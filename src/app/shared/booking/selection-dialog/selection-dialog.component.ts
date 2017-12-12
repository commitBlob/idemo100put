// Core
import { MdDialogRef } from '@angular/material';
import { Component } from '@angular/core';

@Component({
  selector: 'app-selection-dialog',
  templateUrl: 'selection-dialog.html'
})
export class SelectionDialogComponent {
  public title: string;
  public body: any;

  constructor(public dialogRef: MdDialogRef<SelectionDialogComponent>) {

  }
}
