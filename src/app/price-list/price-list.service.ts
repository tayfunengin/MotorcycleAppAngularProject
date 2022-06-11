import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Price } from "../shared/price.model";

@Injectable({providedIn:'root'})

export class PriceListService{

  pricesChanged = new Subject<Price[]>();

  private prices: Price[] = [
    new Price('Leoncino500', 5000),
    new Price('TRK500X',6000)
  ];

  getPrices(){
    return this.prices.slice();
  }

  addPrice(price: Price){    
    this.prices.push(price);
    this.pricesChanged.next(this.prices.slice());    
  }

  updatePrice(newPrice: Price){   
    const result = this.prices.filter(
      (f) => f.name === newPrice.name
    );    
    result[0].price = newPrice.price;
    this.pricesChanged.next(this.prices.slice());
  }

  deletePrice(index: number){
    this.prices.splice(index,1);
    this.pricesChanged.next(this.prices.slice());
  }  

  deletePriceFromDetail(deletedMotoPrice: Price){
    const result = this.prices.filter(
      (f) => f.name != deletedMotoPrice.name
    );    
    this.prices = result;
    this.pricesChanged.next(this.prices.slice());
  }


}