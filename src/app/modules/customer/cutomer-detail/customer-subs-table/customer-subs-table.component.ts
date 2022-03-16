import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator'
import { MatTableDataSource } from '@angular/material/table';
export interface Subscription {
  subscriptionID: string;
  product: string;
  plan: string;
  status: string;

}
const SUBSCRIPTION_DATA: Subscription[] = [
  {subscriptionID: "1", plan: 'Basic', product: "enadoc", status: 'Active'},
  {subscriptionID: "2", plan: 'Basic', product:"enadoc", status: 'Inactive'},
  {subscriptionID:"3", plan: 'Premium', product: "enadoc", status: 'Active'},
  {subscriptionID: "4", plan: 'Basic', product:"enadoc", status: 'Active'},
  {subscriptionID: "5", plan: 'Basic', product: "enadoc", status: 'Active'},
  {subscriptionID: "6", plan: 'Basic', product: "enadoc", status: 'Inactive'},
  {subscriptionID: "7", plan: 'Nitrogen', product: "enadoc", status: 'N'},
  {subscriptionID: "8", plan: 'Oxygen', product: "enadoc", status: 'O'},
  {subscriptionID: "9", plan: 'Fluorine', product: "enadoc", status: 'F'},
  {subscriptionID: "10", plan: 'Neon', product: "enadoc", status: 'Ne'},
  {subscriptionID:"11", plan: 'Sodium', product: "enadoc", status: 'Na'},
  {subscriptionID: "12", plan: 'Magnesium', product:"enadoc", status: 'Mg'},
  {subscriptionID: "13", plan: 'Aluminum', product: "enadoc", status: 'Al'},
  {subscriptionID: "14", plan: 'Silicon', product: "enadoc", status: 'Si'},
  {subscriptionID: "15", plan: 'Phosphorus', product: "enadoc", status: 'P'},

];
@Component({
  selector: 'app-customer-subs-table',
  templateUrl: './customer-subs-table.component.html',
  styleUrls: ['./customer-subs-table.component.css']
})
export class CustomerSubsTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['subscriptionID', 'plan', 'product', 'status'];
  dataSource = new MatTableDataSource<Subscription>(SUBSCRIPTION_DATA);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor() { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
