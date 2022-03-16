import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-gridbox',
  templateUrl: './dashboard-gridbox.component.html',
  styleUrls: ['./dashboard-gridbox.component.css']
})
export class DashboardGridboxComponent implements OnInit {

  tCustomer : string ='60';
  nRevenue : string= '$200000';
  tSubscription : string= '89';
  tProduct : string= '7';
  xVal1 : string= 'Xxxxxx';
  xVal2 : string= 'Xxxxxx';
  
  constructor() { }

  ngOnInit(): void {
  }

}
