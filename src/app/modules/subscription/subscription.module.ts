import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionComponent } from './subscription-main/subscription.component';
import { SubscriptionRoutes } from './subscription-routing.module';


@NgModule({
  declarations: [
    SubscriptionComponent
  ],
  imports: [
    CommonModule,
    SubscriptionRoutes

  ],exports: [

  ]

})
export class SubscriptionModule { }
