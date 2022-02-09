import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full'
  },

  {
    path: '',
    children:[
      { path: 'login', component: LoginComponent }
    ]
  }
];

export const AuthRoutes = RouterModule.forChild(routes);
