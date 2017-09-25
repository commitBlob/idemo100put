import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'myCurrencyPipe'})
export class CurrencyPipe implements PipeTransform {
  transform(price: number, currency: string): string {
    let currencySymobl = '';
    if (currency === 'EUR') {
      currencySymobl = '€';
      return Math.floor(price) + currencySymobl;
    }

    if (currency === 'USD') {
      currencySymobl = '$';
      return Math.floor(price) + currencySymobl;
    }

    if (currency === 'GBP') {
      currencySymobl = '£';
      return currencySymobl + Math.floor(price);
    }

    if (currency === 'HRK') {
      currencySymobl = 'Kn';
      return Math.floor(price) + currencySymobl;
    }
  }
}
