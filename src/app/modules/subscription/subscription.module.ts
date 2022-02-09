import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionComponent } from './subscription-main/subscription.component';
import { SubscriptionRoutes } from './subscription-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    SubscriptionComponent
  ],
  imports: [
    CommonModule,
    SubscriptionRoutes,
    SharedModule

  ],exports: [

  ]

})
export class SubscriptionModule { }
