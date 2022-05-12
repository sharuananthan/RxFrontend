import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  customerID!:string;

  constructor(private _activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.customerID = this._activatedRoute.snapshot.paramMap.get('id')||'';
  }

}
