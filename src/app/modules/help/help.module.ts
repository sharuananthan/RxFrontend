import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpComponent } from './help-main/help.component';
import { HelpRoutes } from './help-routing.module';


@NgModule({
  declarations: [
    HelpComponent

  ],
  imports: [
    CommonModule,
    HelpRoutes


  ],exports: [

  ]

})
export class HelpModule { }
