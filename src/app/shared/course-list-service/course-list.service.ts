// Core
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class CourseListService {
  constructor( private  _http: Http) {}

  getCourseList() {
    // need to read from the file
  }
}
