import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { PasswordFormFieldComponent } from './components/password-form-field/password-form-field.component';
import { LoginPage } from './pages/login-page/login.page';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'login', pathMatch: 'full', component: LoginPage}
    ]),
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  declarations: [LoginFormComponent, PasswordFormFieldComponent, LoginPage],
})
export class AuthModule {}
