// Core
import { Observable } from 'rxjs/Rx';
import { MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material';
import { Injectable, ViewContainerRef } from '@angular/core';

// App specific
import { ConfirmDialogComponent } from './confirm-dialog.component';

@Injectable()
export class DialogsService {

  constructor(private dialog: MatDialog) {
  }

  public confirm(title: string, message: string, viewContainerRef: ViewContainerRef): Observable<boolean> {
    let dialogRef: MatDialogRef<ConfirmDialogComponent>;
    const config = new MatDialogConfig();
    config.viewContainerRef = viewContainerRef;
    config.disableClose = false;

    dialogRef = this.dialog.open(ConfirmDialogComponent, config);

    dialogRef.componentInstance.title = title;
    dialogRef.componentInstance.message = message;

    return dialogRef.afterClosed();
  }
}
