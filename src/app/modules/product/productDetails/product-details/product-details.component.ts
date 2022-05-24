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
  productID!:string;
  product: Product ;
  
 


  constructor(public route: ActivatedRoute,public router: Router, private productservice:ProductService) {
    this.productID = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.productID = this._activatedRoute.snapshot.paramMap.get('id')||'';
  }


  getProduct(productId:string){
    this.productservice.getProductById(this.productID).subscribe(resp => {
      this.product = {
        _id: resp._id,
        author_name: resp.author_name,
        title: resp.title,
        body: resp.body,
        creationDate:resp.creationDate,
      };
    });
  }


}
