import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketplaceMainComponent } from './marketplace-main/marketplace-main.component';
import { MarketplaceRoutes } from './marketplace-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MarketplaceProductComponent } from './marketplace-product/marketplace-product/marketplace-product.component';



@NgModule({
  declarations: [
    MarketplaceMainComponent,
    MarketplaceProductComponent
  ],
  imports: [
    CommonModule,
    MarketplaceRoutes,
    SharedModule,
   
  ]
})
export class MarketplaceModule { }
