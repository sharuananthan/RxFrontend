import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardTitleComponent } from './dashboard-title/dashboard-title.component';
import { SharedModule } from '../../shared/shared.module';
import { DashboardComponent } from './dashboard-main/dashboard.component';
import { DashboardRoutes } from './dashboard-routing.module';
import { DashboardGraphComponent } from './dashboard-graph/dashboard-graph/dashboard-graph.component';
import { DashboardTableComponent } from './dashboard-table/dashboard-table/dashboard-table.component';



@NgModule({
  declarations: [
    DashboardTitleComponent,
    DashboardComponent,
    DashboardGraphComponent,
    DashboardTableComponent

  ],
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutes,


  ],exports: [

  ]

})
export class DashboardModule { }
