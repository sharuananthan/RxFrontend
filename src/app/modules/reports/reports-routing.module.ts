import { Routes, RouterModule } from '@angular/router';
import { ReportsMainComponent } from './reports-main/reports-main.component';

const routes: Routes = [
  {
    path: '',
    component: ReportsMainComponent,
  },
];

export const reportsRoutes = RouterModule.forChild(routes);
