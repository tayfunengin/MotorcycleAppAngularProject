import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Motorcycle } from '../motorcycle.model';
import { MotorcycleService } from '../motorcycle.service';

@Component({
  selector: 'app-motorcycle-list',
  templateUrl: './motorcycle-list.component.html',
  styleUrls: ['./motorcycle-list.component.css']
})
export class MotorcycleListComponent implements OnInit, OnDestroy  {

  motorcycles: Motorcycle[];
  subscription: Subscription;
  
  constructor(
    private motorcycleService: MotorcycleService,
    private router: Router,
    private route: ActivatedRoute
  ) { }


  ngOnInit(): void {
    this.subscription = this.motorcycleService.motorcyclesChanged.subscribe( (motorcycles: Motorcycle[] ) => {
      this.motorcycles = motorcycles;
    })
    this.motorcycles = this.motorcycleService.getMotorcycles();
  }

  onNewMotorcycle(){
    this.router.navigate( ['new'], {relativeTo: this.route});
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
