import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardTitleComponent } from './dashboard-title/dashboard-title.component';
import { SharedModule } from '../../shared/shared.module';
import { DashboardComponent } from './dashboard-main/dashboard.component';
import { DashboardRoutes } from './dashboard-routing.module';
import { DashboardTableComponent } from './dashboard-table/dashboard-table/dashboard-table.component';
import { GraphComponent } from './graph/graph.component';
import { ChartsModule } from 'ng2-charts';
import { DashboardGridboxComponent } from './dashboard-gridbox/dashboard-gridbox.component';



@NgModule({
  declarations: [
    DashboardTitleComponent,
    DashboardComponent,
    DashboardTableComponent,
    GraphComponent,
    DashboardGridboxComponent

  ],
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutes,
    ChartsModule


  ],exports: [

  ],
  bootstrap: [DashboardTableComponent]

})
export class DashboardModule { }
