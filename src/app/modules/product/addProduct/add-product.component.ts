import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators ,NgForm} from '@angular/forms';
//import { SharedService } from 'src/app/shared/shared.service';
import { ProductTableComponent } from '../productMain/product-table/product-table.component';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
  //providers:[SharedService]
})
export class AddProductComponent implements OnInit {

  userForm!: FormGroup;
  // refreshProductList: any;
  constructor(private fb: FormBuilder, ) { }

  ProductList:any=[];

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: ['', Validators.required ],
      description:['', Validators.required ],
      logo:['', Validators.required ],
      webUrl:['', Validators.required ],
      redirectUrl:['', Validators.required ],
      key:['', Validators.required ],
      period:['', Validators.required ],
      

    })

    
  // this.refreshProductList();
    
  }
  

  // resetForm(userForm?: NgForm) {
  //   if (userForm)
  //   userForm.reset();
  //   this.doctorService.selectedDoctor = {
  //     _id: "",
  //     name: "",
  //     address: "",
  //     mobile_no: "",
  //    email: ""
  //   }
  // }

  // onSubmit(userform: NgForm) {
  //   if (userform.value.name == "") {
  //     this.service.addProduct(userform.value).subscribe((res) => {
        
  //       this.refreshProductList();

  //     });
  //   }
  //   else { 
  //     this.service.addProduct(userform.value).subscribe((res) => {
       
  //       this.refreshProductList();
  
  //     });
  //   }
  // }

  // refreshProductList() {
  //   this.service.getProductList().subscribe(Product => {
  //     this.service.Products=Product[];
  //   });
  // }


  get f() { return this.userForm.controls; }
}
