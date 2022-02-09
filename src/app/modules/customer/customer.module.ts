import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer-main/customer.component';
import { CustomerRoutes } from './customer-routing.module';


@NgModule({
  declarations: [
    CustomerComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutes

  ],exports: [
  ]

})
export class CustomerModule { }
