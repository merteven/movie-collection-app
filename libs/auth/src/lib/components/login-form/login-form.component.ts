import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field'

const usernameMinLength = 3;
const usernameMaxLength = 32;

const passwordMinLength = 6;
const passwordMaxLength = 32;

@Component({
  selector: 'mc-login-form',
  templateUrl: './login-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent {
  loginForm = new FormGroup({
    username: new FormControl('', [
      Validators.minLength(usernameMinLength),
      Validators.maxLength(usernameMaxLength),
    ]),
    password: new FormControl('', [
      Validators.minLength(passwordMinLength),
      Validators.maxLength(passwordMaxLength),
    ]),
  });

  usernameFieldName = 'username';
  usernameFieldErrorText = `Username must be at least ${usernameMinLength} and at most ${usernameMaxLength} characters long`;

  passwordFieldName = 'password';
  passwordFieldErrorText = `Password must be at least ${passwordMinLength} and at most ${passwordMaxLength} characters long`;

  formAppearance: MatFormFieldAppearance = 'outline'

  onSubmit() {
    // do sth
  }
}
