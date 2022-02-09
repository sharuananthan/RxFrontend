import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardTitleComponent } from './dashboard-title/dashboard-title.component';
import { SharedModule } from '../../shared/shared.module';
import { DashboardComponent } from './dashboard-main/dashboard.component';
import { DashboardRoutes } from './dashboard-routing.module';



@NgModule({
  declarations: [
    DashboardTitleComponent,
    DashboardComponent

  ],
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutes,


  ],exports: [

  ]

})
export class DashboardModule { }
