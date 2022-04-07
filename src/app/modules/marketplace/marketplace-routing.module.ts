import { Routes, RouterModule } from '@angular/router';
import { MarketplaceMainComponent } from './marketplace-main/marketplace-main.component';

const routes: Routes = [
  {
    path: '',
    component: MarketplaceMainComponent
  }
];

export const MarketplaceRoutes = RouterModule.forChild(routes);

