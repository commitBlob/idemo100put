// Core
import { Component, Input, OnInit } from '@angular/core';

// Models
import { PricelistModel } from './pricelist.interface';

@Component({
  selector: 'app-pricelist',
  templateUrl: './pricelist.component.html',
})
export class PricelistComponent implements OnInit {

  @Input()
  apartmentName: string;

  priceList: PricelistModel[] = [
    {
      apartmentShortName: 'lavanda',
      monthlyPrice: {
        jan: 50,
        feb: 50,
        mar: 50,
        apr: 50,
        may: 80,
        jun: 80,
        jul: 95,
        aug: 95,
        sep: 80,
        oct: 80,
        nov: 50,
        dec: 50
      }
    },
    {
      apartmentShortName: 'old-port',
      monthlyPrice: {
        jan: 50,
        feb: 50,
        mar: 50,
        apr: 50,
        may: 80,
        jun: 80,
        jul: 95,
        aug: 95,
        sep: 80,
        oct: 80,
        nov: 50,
        dec: 50
      }
    },
    {
      apartmentShortName: 'old-town',
      monthlyPrice: {
        jan: 60,
        feb: 60,
        mar: 60,
        apr: 60,
        may: 100,
        jun: 100,
        jul: 110,
        aug: 110,
        sep: 100,
        oct: 100,
        nov: 60,
        dec: 60
      }
    },
    {
      apartmentShortName: 'love-and-hope',
      monthlyPrice: {
        jan: 80,
        feb: 80,
        mar: 80,
        apr: 80,
        may: 150,
        jun: 150,
        jul: 165,
        aug: 165,
        sep: 150,
        oct: 150,
        nov: 80,
        dec: 80
      }
    }
  ];
  tempPricelist: any;

  constructor() {
  }

  ngOnInit(): void {
    this.getPriceList(this.apartmentName);
  }

  getPriceList(apartmentName: string): void {
    const pricelistObject = this.priceList.find(prices => prices.apartmentShortName === apartmentName);
    this.tempPricelist = pricelistObject.monthlyPrice;
  }

  generateArray(obj) {
    return Object.keys(obj).map((key) => {
      return {key: key, value: obj[key]}
    });
  }
}
