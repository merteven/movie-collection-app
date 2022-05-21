import {
  Component,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';

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
  @Output() submitted = new EventEmitter<{
    username: string;
    password: string;
  }>();

  loginForm = new FormGroup(
    {
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(usernameMinLength),
        Validators.maxLength(usernameMaxLength),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(passwordMinLength),
        Validators.maxLength(passwordMaxLength),
      ]),
    },
    { updateOn: 'change' }
  );

  usernameFieldName = 'username';
  usernameFieldErrorText = `Username must be at least ${usernameMinLength} and at most ${usernameMaxLength} characters long`;

  get shouldShowUsernameError(): boolean {
    return this.loginForm.get(this.usernameFieldName)?.invalid ?? false;
  }

  passwordFieldName = 'password';
  passwordFieldErrorText = `Password must be at least ${passwordMinLength} and at most ${passwordMaxLength} characters long`;

  get passwordControl(): FormControl | null {
    return this.loginForm.get(this.passwordFieldName) as FormControl;
  }

  formAppearance: MatFormFieldAppearance = 'outline';

  onSubmit() {
    this.submitted.emit(this.loginForm.value);
  }
}
