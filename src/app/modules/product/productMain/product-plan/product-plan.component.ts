import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  price: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Atomic Level', price: '$90.00' },
  { name: 'Alien Level', price: '$450.00' },
  { name: 'Space Level', price: '$840.00' },


];

@Component({
  selector: 'app-product-plan',
  templateUrl: './product-plan.component.html',
  styleUrls: ['./product-plan.component.css']
})
export class ProductPlanComponent implements OnInit {

  displayedColumns: string[] = [ 'name', 'price'];
  data = ELEMENT_DATA;
  
  constructor() { }

  ngOnInit(): void {
  }

}
