import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardTitleComponent } from './dashboard-title/dashboard-title.component';
import { SharedModule } from '../../shared/shared.module';
import { DashboardComponent } from './dashboard-main/dashboard.component';
import { DashboardRoutes } from './dashboard-routing.module';
import { GraphComponent } from './graph/graph.component';
import { ChartsModule } from 'ng2-charts';
import { DashPieComponent } from './dash-pie/dash-pie.component';
import { CurevedLineComponent } from './curved-line/curved-line.component';



@NgModule({
  declarations: [
    DashboardTitleComponent,
    DashboardComponent,
    GraphComponent,
    DashPieComponent,
    CurevedLineComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutes,
    ChartsModule


  ],exports: [

  ]

})
export class DashboardModule { }
