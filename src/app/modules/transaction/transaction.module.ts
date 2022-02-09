import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionComponent } from './transaction-main/transaction.component';
import { TransactionRoutes } from './transaction-routing.module';


@NgModule({
  declarations: [
    TransactionComponent

  ],
  imports: [
    CommonModule,
    TransactionRoutes

  ],exports: [

  ]

})
export class TransactionModule { }
