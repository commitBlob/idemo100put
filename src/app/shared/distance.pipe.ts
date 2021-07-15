import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'distancePipe'})
export class DistancePipe implements PipeTransform {
  transform(value: number): string {
    if (value >= 1000) {
      return (value / 1000).toFixed(2) + ' km';
    } else {
      return value + ' m';
    }
  }
}
