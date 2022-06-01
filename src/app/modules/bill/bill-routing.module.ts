import { Routes, RouterModule } from '@angular/router';
import { BillComponent } from './bill-main/bill.component';

const routes: Routes = [
  {
    path: '',
    component: BillComponent
  }
];

export const BillRoutes = RouterModule.forChild(routes);
