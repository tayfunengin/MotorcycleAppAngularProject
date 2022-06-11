import { Price } from "../shared/price.model";


export class Motorcycle {
  public brand: string;
  public model: string;
  public horsePower: number;
  public torque: number;
  public description: string;
  public imagePath: string;
  public price: Price;

  constructor(
    brand: string,
    model: string,
    horsePower: number,
    torque: number,
    description: string,
    imagePath: string,
    price: Price
  ) {
    this.brand = brand;
    this.model = model;
    this.horsePower = horsePower;
    this.torque = torque;
    this.description = description;
    this.imagePath = imagePath;
    this.price = price;
  }
}
