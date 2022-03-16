import { Routes, RouterModule } from '@angular/router';
import { CustomerDetailsComponent } from './cutomer-detail/customer-details/customer-details.component';
import { CustomerComponent } from './customer-main/customer.component';

const routes: Routes = [
  {
    path: '',
    component: CustomerComponent,
  },
  {
    path: 'details/:id',
    component: CustomerDetailsComponent,
  }
];

export const CustomerRoutes = RouterModule.forChild(routes);
