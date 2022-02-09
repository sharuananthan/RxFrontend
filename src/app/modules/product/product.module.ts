import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product-main/product.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductRoutes } from './product-routing.module';


@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductRoutes
  ],exports: [

  ]

})
export class ProductModule { }
