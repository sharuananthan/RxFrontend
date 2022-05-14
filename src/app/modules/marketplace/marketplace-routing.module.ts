import { Routes, RouterModule } from '@angular/router';
import { MarketplaceMainComponent } from './marketplace-main/marketplace-main.component';
import { MarketplaceSearchComponent } from './marketplace-search/marketplace-search/marketplace-search.component';

const routes: Routes = [
  {
    path: '',
    component: MarketplaceMainComponent
  },
  {
    path: '',
    children:[
      {
        path: 'search',
        component: MarketplaceSearchComponent
      },
      
    ]
  }
  

];

export const MarketplaceRoutes = RouterModule.forChild(routes);

