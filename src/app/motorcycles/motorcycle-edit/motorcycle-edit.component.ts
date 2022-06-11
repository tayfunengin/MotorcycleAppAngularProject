import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PriceListService } from 'src/app/price-list/price-list.service';
import { Price } from 'src/app/shared/price.model';
import { Motorcycle } from '../motorcycle.model';
import { MotorcycleService } from '../motorcycle.service';

@Component({
  selector: 'app-motorcycle-edit',
  templateUrl: './motorcycle-edit.component.html',
  styleUrls: ['./motorcycle-edit.component.css']
})
export class MotorcycleEditComponent implements OnInit {
  id: number;
  editMode= false;
  motorcycleForm: FormGroup;
  motoPrevPrice : number;
  constructor(private route: ActivatedRoute, private motorcycleService: MotorcycleService, private router: Router, private priceListService: PriceListService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id=+params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    );
  }

  private initForm(){
    
    let motoBrand = '';
    let motoModel = '';
    let motoHorsePower = null;
    let motoTorque = null;
    let motoImagePath = '';
    let motoDescription = '';
    let motoPrice: Price = new Price('', 0);

    if(this.editMode){
      const motorcycle = this.motorcycleService.getMotorcycle(this.id);
      motoBrand = motorcycle.brand;
      motoModel = motorcycle.model;
      motoTorque = motorcycle.torque;
      motoHorsePower = motorcycle.horsePower;
      motoImagePath = motorcycle.imagePath;      
      motoDescription = motorcycle.description;

      if(motorcycle['price']){
        motoPrice = new Price(motorcycle.price.name, motorcycle.price.price)
        }
        this.motoPrevPrice = motoPrice.price;
      }    

    this.motorcycleForm = new FormGroup({
      'brand' : new FormControl(motoBrand, Validators.required),
      'model' : new FormControl(motoModel, Validators.required),
      'horsePower' : new FormControl(motoHorsePower, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/) ]),
      'torque' : new FormControl(motoTorque, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/) ]),
      'imagePath' : new FormControl(motoImagePath, Validators.required),
      'description' : new FormControl(motoDescription, Validators.required),
      'price': new FormControl(motoPrice.price, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/) ]),
    });
  }  

  onCancel(){
    this.router.navigate(['../'],{relativeTo: this.route});
  }

  onSubmit(){    
    const newPrice = new Price(
      this.motorcycleForm.value['model'],
      this.motorcycleForm.value['price']
    );
    const newMoto = new Motorcycle(
    this.motorcycleForm.value['brand'],
    this.motorcycleForm.value['model'],
    this.motorcycleForm.value['horsePower'],
    this.motorcycleForm.value['torque'],
    this.motorcycleForm.value['description'],
    this.motorcycleForm.value['imagePath'],
    newPrice
    );   

    if(this.editMode){
      this.motorcycleService.updateMotorcycle(this.id, newMoto);
      if(newMoto.price.price != this.motoPrevPrice)
        this.priceListService.updatePrice(newMoto.price);
    }
    else{
      this.motorcycleService.addMotorcycle(newMoto);
      console.log(newMoto);
    }
    this.onCancel();

  }

}
