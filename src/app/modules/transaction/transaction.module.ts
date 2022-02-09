import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionComponent } from './transaction-main/transaction.component';
import { TransactionRoutes } from './transaction-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    TransactionComponent

  ],
  imports: [
    CommonModule,
    TransactionRoutes,
    SharedModule

  ],exports: [

  ]

})
export class TransactionModule { }
