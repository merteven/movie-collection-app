import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { Anonymous, CoreModule } from '@movie-collection/core';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { PasswordFormFieldComponent } from './components/password-form-field/password-form-field.component';
import { LoginPageComponent } from './pages/login-page/login.page';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { RegisterPageComponent } from './pages/register/register.page';

@NgModule({
  imports: [
    CoreModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: 'login',
        pathMatch: 'full',
        component: LoginPageComponent,
        canActivate: [Anonymous],
      },
      {
        path: 'register',
        pathMatch: 'full',
        component: RegisterPageComponent,
        canActivate: [Anonymous],
      },
    ]),
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  declarations: [
    LoginFormComponent,
    PasswordFormFieldComponent,
    LoginPageComponent,
    RegisterFormComponent,
    RegisterPageComponent,
  ],
})
export class AuthModule {}
