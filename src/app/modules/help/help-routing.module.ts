import { Routes, RouterModule } from '@angular/router';
import { HelpComponent } from './help-main/help.component';

const routes: Routes = [
  {
    path: '',
    component: HelpComponent
  }
];

export const HelpRoutes = RouterModule.forChild(routes);
