import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './productMain/product-main/product.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductRoutes } from './product-routing.module';
import { ProductTableComponent } from './productMain/product-table/product-table.component';
import { ProductPlanComponent } from './productMain/product-plan/product-plan.component';
import {MatTableModule} from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { AddProductComponent } from './addProduct/add-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddPlanComponent } from './addPlan/add-plan.component';



@NgModule({
  declarations: [
    ProductComponent,
    ProductTableComponent,
    ProductPlanComponent,
    AddProductComponent,
    AddPlanComponent,
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductRoutes,
    MatTableModule,
    MatTabsModule,
    ReactiveFormsModule
  ],exports: [

  ]

})
export class ProductModule { }
