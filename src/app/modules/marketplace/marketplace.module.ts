import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketplaceMainComponent } from './marketplace-main/marketplace-main.component';
import { MarketplaceRoutes } from './marketplace-routing.module';



@NgModule({
  declarations: [
    MarketplaceMainComponent
  ],
  imports: [
    CommonModule,
    MarketplaceRoutes
  ]
})
export class MarketplaceModule { }
