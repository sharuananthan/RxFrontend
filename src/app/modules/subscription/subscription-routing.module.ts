import { Routes, RouterModule } from '@angular/router';
import { SubscriptionComponent } from './subscription-main/subscription.component';

const routes: Routes = [
  {
    path: '',
    component: SubscriptionComponent
  }
];

export const SubscriptionRoutes = RouterModule.forChild(routes);
