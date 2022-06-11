import { Component, OnInit } from '@angular/core';
import { Motorcycle } from '../motorcycle.model';
import { MotorcycleService } from '../motorcycle.service';

@Component({
  selector: 'app-motorcycle-start',
  templateUrl: './motorcycle-start.component.html',
  styleUrls: ['./motorcycle-start.component.css']
})
export class MotorcycleStartComponent implements OnInit {

  motoCount: number;

  constructor(private motorcycleService: MotorcycleService) { }

  ngOnInit(): void {
    this.motoCount = this.motorcycleService.getMotorcycles().length;
    this.motorcycleService.motorcyclesChanged.subscribe( (motorcyles: Motorcycle[] ) => {
      this.motoCount = motorcyles.length;
    } )
  }

}
