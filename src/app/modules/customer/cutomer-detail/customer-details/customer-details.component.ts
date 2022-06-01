import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from 'src/app/data/schema/customer';
import { CustomerService } from 'src/app/data/service/Customer/customer.service';
@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  customerID:string;
  customer!:Customer;

  constructor(private _activatedRoute: ActivatedRoute,private _customerService:CustomerService) {
    this.customerID = this._activatedRoute.snapshot.paramMap.get('id')||'';
  }
  ngOnInit(): void {
    this.getCustomerDetails(this.customerID);
  }
  getCustomerDetails(customerId:string){
    this._customerService.getCustomerDetails(customerId).subscribe(
      (data)=>{
        this.customer = data;
        console.log(data);
      }
    )
  }
}
