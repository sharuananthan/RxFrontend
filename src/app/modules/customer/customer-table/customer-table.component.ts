import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator'
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
export interface Customer {
  customerID: string;
  name: string;
  email: string;
  netRevenue: string;
  totalAmount:number,
  status: string;

}
const CUSTOMER_DATA: Customer[] = [
  {customerID: "1",name: 'Sulegjan', netRevenue: "100$", status: 'Active',totalAmount:100,email:"abc@gmail.com"},
  {customerID: "2",name: 'Ajeevitha', netRevenue:"200$", status: 'Active',totalAmount:100,email:"abc@gmail.com"},
  {customerID:"3",name: 'Akshayan', netRevenue: "150$", status: 'Active',totalAmount:100,email:"abc@gmail.com"},
  {customerID: "4",name: 'Dasikaran', netRevenue:"170$", status: 'Active',totalAmount:100,email:"abc@gmail.com"},
  {customerID: "5",name: 'Sharu', netRevenue: "220$", status: 'Active',totalAmount:100,email:"abc@gmail.com"},
  {customerID: "6",name: 'Vaish', netRevenue: "320$", status: 'Active',totalAmount:100,email:"abc@gmail.com"},
  {customerID: "7",name: 'Keethan', netRevenue: "enadoc", status: 'N',totalAmount:100,email:"abc@gmail.com"},
  {customerID: "8",name: 'Oxygen', netRevenue: "enadoc", status: 'O',totalAmount:100,email:"abc@gmail.com"},
  {customerID: "9",name: 'Fluorine', netRevenue: "enadoc", status: 'F',totalAmount:100,email:"abc@gmail.com"},
  {customerID: "10",name: 'Neon', netRevenue: "enadoc", status: 'Ne',totalAmount:100,email:"abc@gmail.com"},
  {customerID:"11",name: 'Sodium', netRevenue: "enadoc", status: 'Na',totalAmount:100,email:"abc@gmail.com"},
  {customerID: "12",name: 'Magnesium', netRevenue:"enadoc", status: 'Mg',totalAmount:100,email:"abc@gmail.com"},
  {customerID: "13",name: 'Aluminum', netRevenue: "enadoc", status: 'Al',totalAmount:100,email:"abc@gmail.com"},
  {customerID: "14",name: 'Silicon', netRevenue: "enadoc", status: 'Si',totalAmount:100,email:"abc@gmail.com"},
  {customerID: "15",name: 'Phosphorus', netRevenue: "enadoc", status: 'P',totalAmount:100,email:"abc@gmail.com"},

];
@Component({
  selector: 'app-customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.css']
})
export class CustomerTableComponent implements AfterViewInit {
  searchKey!: string;
  displayedColumns: string[] = ['customerID', 'name','email', 'netRevenue','totalAmount','status'];
  dataSource = new MatTableDataSource<Customer>(CUSTOMER_DATA);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private _router:Router) { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
navigate(row:Customer){
  this._router.navigate(['/customer/details',row.customerID]);
}



}
