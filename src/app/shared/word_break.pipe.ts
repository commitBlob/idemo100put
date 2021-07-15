import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'wordBreakPipe'})
export class WordBreakPipe implements PipeTransform {
  transform(value: string): string {
    const newValue = value.replace('_', ' ');
    return `${newValue}`;
  }
}
