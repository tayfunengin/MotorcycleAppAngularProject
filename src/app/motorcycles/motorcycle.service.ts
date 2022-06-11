import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Price } from "../shared/price.model";
import { Motorcycle } from "./motorcycle.model";


@Injectable({providedIn:"root"})

export class MotorcycleService{

  motorcyclesChanged = new Subject<Motorcycle[]>();

  private motorcycles: Motorcycle[] = [
    new Motorcycle(
      'Benelli',
      'Leoncino500',
      47,
      45,
      'Easy, compact and dynamic, Leoncino 500 MY 2021 maintains the classic and balanced lines of its genesis, which are now integrated with more modern and avant-garde graphics, designed to enhance the philosophy of this bike.',
      'https://49f44b141764baa2639d-7ed4c224bc1671c64dae8740f0861232.ssl.cf6.rackcdn.com/motorcycles/leoncino/gallery/Leoncino-8.jpg',
      new Price('Leoncino500', 5000)
    ),
    new Motorcycle(
      'Benelli',
      'TRK500X',
      48,
      46,
      'A motorcycle with remodelled details, important updates and evolutions, starting with the new graphics and the new texture of the plastics used to bestow even more character on the TRK 502 X, highlighting its globetrotter spirit',
      'https://49f44b141764baa2639d-7ed4c224bc1671c64dae8740f0861232.ssl.cf6.rackcdn.com/motorcycles/trk502x_My2020/white/trk502x_My2020_white2.jpg',
      new Price('TRK500X', 6000)
    )
  ];

  constructor(){}

  getMotorcycles() {
    return this.motorcycles.slice(); 
  }

  getMotorcycle(index: number){
    return this.motorcycles[index];
  }

  addMotorcycle(motorcycle: Motorcycle){
    this.motorcycles.push(motorcycle);
    this.motorcyclesChanged.next(this.motorcycles.slice());
  }

  updateMotorcycle(index: number, newMotorcycle: Motorcycle){
    this.motorcycles[index] = newMotorcycle;
    this.motorcyclesChanged.next(this.motorcycles.slice());
  }

  deleteMotorcycle(index: number){
    this.motorcycles.splice(index, 1);
    this.motorcyclesChanged.next(this.motorcycles.slice());
  }

}