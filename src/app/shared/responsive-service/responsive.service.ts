// Core
import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import 'rxjs/add/operator/distinctUntilChanged';

// App specific
import { WindowRef } from './window.service';

export interface ResponsiveMode {
  responsiveMode: any;
}

const currentMode: ResponsiveMode = {
  responsiveMode: {
    mode: undefined,
    windowWidth: undefined
  }
};

@Injectable()
export class ResponsiveService {
  win: Window;
  desktopLrg: number = 1280;
  desktop: number = 1024;
  desktopSml: number = 769;
  mobile: number = 600;
  mobileSml: number = 400;

  // Observable string sources
  public responsiveModeSource = new Subject<string>();
  // Observable string streams
  public responsiveModeAnnounced$ = this.responsiveModeSource.asObservable();

  private subject = new BehaviorSubject<ResponsiveMode>(currentMode);
  private responsiveStore = this.subject.asObservable().distinctUntilChanged();

  constructor(private winRef: WindowRef) {
    this.win = winRef.nativeWindow;
  }

  get value() {
    return this.subject.value;
  }

  select<T>(name: string): Observable<T> {
    return this.responsiveStore.pluck(name);
  }

  set() {
    this.subject.next({responsiveMode: this.setResponsiveMode()});
  }

  // Set reponsive mode based on window width;
  setResponsiveMode(windowWidth: number = this.win.innerWidth) {

    if (windowWidth >= this.desktopLrg) {
      return {mode: 'desktopLrg', windowWidth};
    } else if (windowWidth < this.desktopLrg && windowWidth >= this.desktop) {
      return {mode: 'desktop', windowWidth};
    } else if (windowWidth < this.desktop && windowWidth >= this.desktopSml) {
      return {mode: 'desktopSmall', windowWidth};
    } else if (windowWidth < this.desktopSml && windowWidth >= this.mobile) {
      return {mode: 'mobile', windowWidth};
    } else {
      return {mode: 'mobileSmall', windowWidth};
    }
  }
}
