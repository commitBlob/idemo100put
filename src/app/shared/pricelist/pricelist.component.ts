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
        jan: 50,
        feb: 50,
        mar: 50,
        apr: 50,
        may: 80,
        jun: 80,
        jul: 90,
        aug: 90,
        sep: 80,
        oct: 80,
        nov: 50,
        dec: 50
      }
    },
    {
      apartmentShortName: 'love-and-hope',
      monthlyPrice: {
        jan: 70,
        feb: 70,
        mar: 70,
        apr: 70,
        may: 135,
        jun: 135,
        jul: 155,
        aug: 155,
        sep: 135,
        oct: 135,
        nov: 70,
        dec: 70
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
