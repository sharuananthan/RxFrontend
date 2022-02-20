import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionComponent } from './transaction-main/transaction.component';
import { TransactionRoutes } from './transaction-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TranTableComponent } from './tran-table/tran-table.component';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    TransactionComponent,
    TranTableComponent

  ],
  imports: [
    CommonModule,
    TransactionRoutes,
    SharedModule,
    MatSortModule,
    MatTableModule

  ],exports: [

  ]

})
export class TransactionModule { }
