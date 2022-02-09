import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpComponent } from './help-main/help.component';
import { HelpRoutes } from './help-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    HelpComponent

  ],
  imports: [
    CommonModule,
    HelpRoutes,
    SharedModule


  ],exports: [

  ]

})
export class HelpModule { }
