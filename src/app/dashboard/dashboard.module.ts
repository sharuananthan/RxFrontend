import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardTitleComponent } from './dashboard-title/dashboard-title.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dash-board/dashboard.component';



@NgModule({
  declarations: [
    DashboardTitleComponent,
    DashboardComponent

  ],
  imports: [
    CommonModule,
    SharedModule

  ],exports: [
    DashboardTitleComponent
  ]

})
export class DashboardModule { }
