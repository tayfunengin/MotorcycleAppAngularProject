import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PriceListService } from 'src/app/price-list/price-list.service';
import { Price } from 'src/app/shared/price.model';
import { Motorcycle } from '../motorcycle.model';
import { MotorcycleService } from '../motorcycle.service';

@Component({
  selector: 'app-motorcycle-detail',
  templateUrl: './motorcycle-detail.component.html',
  styleUrls: ['./motorcycle-detail.component.css'],
})
export class MotorcycleDetailComponent implements OnInit, OnDestroy {
  motorcycle: Motorcycle;
  id: number;

  prices: Price[];
  private prChangeSub: Subscription;

  constructor(
    private motorcycleService: MotorcycleService,
    private route: ActivatedRoute,
    private router: Router,
    private priceListService: PriceListService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.motorcycle = this.motorcycleService.getMotorcycle(this.id);
    });
    this.prices = this.priceListService.getPrices();
    this.prChangeSub = this.priceListService.pricesChanged.subscribe(
      (prices: Price[]) => {
        this.prices = prices;
      }
    );
  }

  onAddToPriceList() { 
    const result = this.prices.filter(
      (f) => f.name === this.motorcycle.price.name
    );   
    if (result.length == 0)
      this.priceListService.addPrice(this.motorcycle.price);      
  }

  onEditMotorcycle() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  onDeleteMotorcycle() {
    this.motorcycleService.deleteMotorcycle(this.id);
    this.router.navigate(['/motorcycles']);    

    this.priceListService.deletePriceFromDetail(this.motorcycle.price);
  }

  ngOnDestroy(): void {
    this.prChangeSub.unsubscribe();
  }
}
