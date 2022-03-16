import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionComponent } from './transaction-main/transaction.component';
import { TransactionRoutes } from './transaction-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TranTableComponent } from './tran-table/tran-table.component';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import { DialogComponent } from './dialog/dialog.component';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    TransactionComponent,
    TranTableComponent,
    DialogComponent

  ],
  imports: [
    CommonModule,
    TransactionRoutes,
    SharedModule,
    MatSortModule,
    MatTableModule,
    MatDialogModule

  ],exports: [

  ]

})
export class TransactionModule { }
