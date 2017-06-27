// Core
import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';

// App specific
import { WindowRef } from './window.service';

@Injectable()
export class ResponsiveService {
  public win: Window;
  public  desktopLrg: number = 1280;
  public desktop: number = 1024;
  public desktopSml: number = 769;
  public mobile: number = 600;
  public mobileSml: number = 400;

  // Observable string sources
  public responsiveModeSource = new Subject<string>();
  // Observable string streams
  public responsiveModeAnnounced$ = this.responsiveModeSource.asObservable();

  constructor(private _win: WindowRef) {
    this.win = _win.nativeWindow;
  }
  // Service message commands
  public announceSizeChange(value: any) {
    this.responsiveModeSource.next(this.setResponsiveMode(value));
  }

  public getResponsiveMode() {
    this.responsiveModeSource.next(this.setResponsiveMode(this.win.innerWidth));
  }

  // Set reponsive mode based on window width;
  public setResponsiveMode(value: number) {
    // If no value passed then get it manually.
    if (typeof value === 'undefined') {
      value = this.win.innerWidth;
    }

    if (value >= this.desktopLrg) {
      return 'desktop-large';
    } else if (value < this.desktopLrg && value >= this.desktop) {
      return 'desktop';
    } else if (value < this.desktop && value >= this.desktopSml) {
      return 'desktop-small';
    } else if (value < this.desktopSml && value >= this.mobile) {
      return 'mobile';
    } else {
      return 'mobile-small';
    }
  }
}
