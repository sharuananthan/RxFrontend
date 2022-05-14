import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './components/footer/footer/footer.component';


const routes: Routes = [
  {
    path: 'footer',
    component: FooterComponent,
  }
];


@NgModule({
  declarations: [],
  imports: [ ]
})
export class SharedRoutingModule { }


