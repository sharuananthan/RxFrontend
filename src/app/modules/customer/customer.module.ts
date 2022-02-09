import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer-main/customer.component';
import { CustomerRoutes } from './customer-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CustomerComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutes,
    SharedModule

  ],exports: [
  ]

})
export class CustomerModule { }
