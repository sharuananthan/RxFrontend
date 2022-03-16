import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsMainComponent } from './reports-main/reports-main.component';
import { reportsRoutes } from './reports-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { SubscriptionComponent } from './subscription/subscription.component';
import { SalesComponent } from './sales/sales.component';
import { RevenueComponent } from './revenue/revenue.component';
import { PaymentsComponent } from './payments/payments.component';

@NgModule({
  declarations: [ReportsMainComponent, SubscriptionComponent, SalesComponent, RevenueComponent, PaymentsComponent],
  imports: [CommonModule, reportsRoutes, SharedModule],
})
export class ReportsModule {}
