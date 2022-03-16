import { Component, OnInit } from '@angular/core';



export interface PeriodicElement {
  name: string;
  id: number;
  plans: number;
  logo: any;
  addons: number;
  url: string;
  

}

const ELEMENT_DATA: PeriodicElement[] = [
  {logo: "../../../assets/icons/c1.png" , id:8699643, name: 'Flowdoh', plans: 5, addons: 9, url: 'H'},
  {logo: "../../../assets/icons/c2.png" , id:9234445, name: 'Enadoc Sign', plans: 3, addons: 9, url: 'H'},
  {logo: "../../../assets/icons/c3.png" , id:1344345, name: 'Skale', plans: 4, addons: 9, url: 'H'},
  {logo: "../../../assets/icons/c4.png" , id:9587755, name: 'Enodoc', plans: 3, addons: 9, url: 'H'}
]


@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnInit {
 
  displayedColumns: string[] = ['logo', 'id', 'name', 'plans',  'addons', 'url'];
  data = ELEMENT_DATA;
  clickedRows = new Set<PeriodicElement>();
  productCount : string ='3';

  
  constructor() { }

  ngOnInit(): void {
  }

}