import { Routes, RouterModule } from '@angular/router';
import { TransactionComponent } from './transaction-main/transaction.component';

const routes: Routes = [
  {
    path: '',
    component: TransactionComponent
  }
];

export const TransactionRoutes = RouterModule.forChild(routes);
