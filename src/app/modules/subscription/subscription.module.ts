import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionComponent } from './subscription-main/subscription.component';
import { SubscriptionRoutes } from './subscription-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { SubGridComponent } from './sub-grid/sub-grid.component';
import { SubTableComponent } from './sub-table/sub-table.component';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';


@NgModule({
  declarations: [
    SubscriptionComponent,
    SubGridComponent,
    SubTableComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    SubscriptionRoutes,
    SharedModule,
    MatSortModule,
    MatTableModule,MatDialogModule

  ],exports: [

  ]

})
export class SubscriptionModule { }
