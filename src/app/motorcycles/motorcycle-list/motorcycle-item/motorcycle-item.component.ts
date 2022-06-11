import { Component, Input, OnInit } from "@angular/core";
import { Motorcycle } from "../../motorcycle.model";

@Component({
  selector: 'app-motorcycle-item',
  templateUrl: './motorcycle-item.component.html',
  styleUrls: ['./motorcycle-item.component.css']
})
export class MotorcycleItemComponent implements OnInit {

  @Input() motorcycle: Motorcycle;
  @Input() index: number;
  
  ngOnInit(): void {}
}
