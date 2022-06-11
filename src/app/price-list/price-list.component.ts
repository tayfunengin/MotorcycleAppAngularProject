import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Price } from '../shared/price.model';
import { PriceListService } from './price-list.service';

@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.css'],
  animations: [
    trigger('liState', [
      state('in', style( {
        opacity : 1,
        transform: 'translateX(0)'
      })),     
      transition('* => void', [
        animate(600, style({
          color: 'crimson',
          transform: 'translateX(100px)',
          opacity: 0
        }))
      ])
    ])
  ]
})
export class PriceListComponent implements OnInit, OnDestroy {

  prices: Price[];
  private prChangeSub: Subscription;

  constructor(private priceListService : PriceListService) { }

  ngOnInit(): void {
    this.prices = this.priceListService.getPrices();
    this.prChangeSub = this.priceListService.pricesChanged.subscribe(
      (prices : Price[]) => {
        this.prices = prices;
      }
    )
  }

  onDeleteItem(index: number){
    this.priceListService.deletePrice(index);
  }

  ngOnDestroy(): void {
    this.prChangeSub.unsubscribe();
  }

}
