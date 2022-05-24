import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ProductService } from 'src/app/data/service/Product/product.service';
import { Product } from 'src/app/data/schema/product.model'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productID:string;
  product!: Product ;
  
 


  constructor(public _activatedRoute: ActivatedRoute,public router: Router, private productservice:ProductService) {
    this.productID = this._activatedRoute.snapshot.paramMap.get('id')||'';
  }

  ngOnInit(): void {
   
    this.getProductById(this.productID);
  }
 

  getProductById(productId:string){
    this.productservice.getProductById(this.productID).subscribe(resp => {
      this.product = {
        
        productId: resp.productId,
        name: resp.name,
        description: resp.description,
        redirectUrl:resp.redirectUrl,
        webhookURL: resp.webhookURL,
        webhookSecret: resp.webhookSecret,
        logoURL:resp.logoURL,
        freeTrialDays: resp.freeTrialDays,
        planCount:resp.planCount,
        addOnCount:resp.addOnCount,


      };

    
    });
  }


}
