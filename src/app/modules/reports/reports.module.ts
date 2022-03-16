import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsMainComponent } from './reports-main/reports-main.component';
import { reportsRoutes } from './reports-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ReportsMainComponent],
  imports: [CommonModule, reportsRoutes, SharedModule],
})
export class ReportsModule {}
