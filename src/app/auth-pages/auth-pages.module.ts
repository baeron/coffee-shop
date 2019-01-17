import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormControl, FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthPagesRoutingModule } from './auth-pages-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,

    CommonModule,
    AuthPagesRoutingModule
  ],
  declarations: [LoginComponent, RegisterComponent, ProfileComponent]
})
export class AuthPagesModule { }
