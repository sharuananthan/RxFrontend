import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product-main/product.component';

const routes: Routes = [
  {
    path: '',
    component: ProductComponent
  }
];

export const ProductRoutes = RouterModule.forChild(routes);
