import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthRoutes } from './auth-routing.module';
import { Register1Component } from './register1/register1.component';
import { RouterModule } from '@angular/router';
import { Register2Component } from './register2/register2.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent,
    Register1Component,
    Register2Component

  ],
  imports: [
    CommonModule,
    AuthRoutes,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
  ]
})
export class AuthModule { }
