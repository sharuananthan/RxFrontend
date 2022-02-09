import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer-main/customer.component';

const routes: Routes = [
  {
    path: '',
    component: CustomerComponent
  }
];

export const CustomerRoutes = RouterModule.forChild(routes);
