import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/data/service/Product/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
  //providers:[SharedService]
})
export class AddProductComponent implements OnInit {

  userForm: FormGroup= new FormGroup({});
  submitted=false;

  constructor(private fb: FormBuilder,private productservice: ProductService) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: ['',[ Validators.required]],
      description: ['', [Validators.required]],
      logoURL: ['',[ Validators.required]],
      webhookURL: ['',[ Validators.required]],
      redirectUrl: ['', [Validators.required]],
      webhookSecret: ['', [Validators.required]],
      freeTrialDays: [0,[ Validators.required]],


    })
  }

  get f() { return this.userForm.controls; }

  onSubmit() {

    if(this.submitted==true){
      return
    }
    this.productservice.CreateProduct(this.userForm.value)
    .subscribe( res=>{
      this.userForm.reset();
      console.log(res);
    }
    )
    this.submitted=true;
  }
}
