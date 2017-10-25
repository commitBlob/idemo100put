// Core
import { Observable } from 'rxjs/Rx';
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';
import { Injectable, ViewContainerRef } from '@angular/core';

// App specific
import { BookingDialogComponent } from '../booking/booking-dialogs/booking-dialog.component';
import { ConfirmDialogComponent } from './confirm-dialog.component';

@Injectable()
export class DialogsService {

  constructor(private dialog: MdDialog) {
  }

  public confirm(title: string, message: string, viewContainerRef: ViewContainerRef): Observable<boolean> {
    let dialogRef: MdDialogRef<ConfirmDialogComponent>;
    const config = new MdDialogConfig();
    config.viewContainerRef = viewContainerRef;
    config.disableClose = false;

    dialogRef = this.dialog.open(ConfirmDialogComponent, config);

    dialogRef.componentInstance.title = title;
    dialogRef.componentInstance.message = message;

    return dialogRef.afterClosed();
  }

  public bookings(title: string, message: string, viewContainerRef: ViewContainerRef): Observable<any> {
    let dialogRef: MdDialogRef<BookingDialogComponent>;
    const config = new MdDialogConfig();
    config.viewContainerRef = viewContainerRef;
    config.disableClose = false;

    dialogRef = this.dialog.open(BookingDialogComponent, config);

    dialogRef.componentInstance.title = title;
    dialogRef.componentInstance.message = message;

    return dialogRef.afterClosed();
  }
}
