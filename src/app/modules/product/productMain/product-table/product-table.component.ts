import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product.model'
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnInit {

  products: Product[] = [];
  displayedColumns: String[] = ['logoURL', 'productId', 'name', 'planCount', 'addOnCount', 'redirectUrl']

  productCount: string = '3';
  dataSource = new MatTableDataSource<Product>();

  constructor(private productservice: ProductService) { }

  ProductList: any = [];

  ngOnInit(): void {
    this.getProducts();
  }


  getProducts() {
    this.productservice.getProducts().subscribe((data: Product[]) => {
      this.products = data;
      this.dataSource.data = this.products
      console.log(this.dataSource)

    });
  }

}