import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import{Product} from '../../schema/product.model'
import { AddProduct } from '../../schema/addProduct.model';
import { AddProductComponent } from 'src/app/modules/product/addProduct/add-product.component';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  readonly APIUrl:any="https://localhost:44352/api/product";


  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.APIUrl);
  }

//   addProducts():Observable<AddProduct>{
// return this.http.post<AddProduct>(this.APIUrl, product)
//   }

}



