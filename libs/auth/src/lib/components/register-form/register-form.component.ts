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
  selector: 'mc-register-form',
  templateUrl: './register-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterFormComponent {
  @Output() submitted = new EventEmitter<{
    username: string;
    password: string;
  }>();

  registerForm = new FormGroup(
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
      passwordRepeat: new FormControl('', [
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
    return this.registerForm.get(this.usernameFieldName)?.invalid ?? false;
  }

  passwordFieldName = 'password';
  passwordFieldErrorText = `Password must be at least ${passwordMinLength} and at most ${passwordMaxLength} characters long`;
  get passwordControl(): FormControl | null {
    return this.registerForm.get(this.passwordFieldName) as FormControl;
  }

  passwordRepeatFieldName = 'passwordRepeat';
  passwordRepeatFieldLabel = 'Repeat Password';
  passwordRepeatFieldErrorText = `Passwords are different`;
  get passwordRepeatControl(): FormControl | null {
    return this.registerForm.get(this.passwordRepeatFieldName) as FormControl;
  }

  formAppearance: MatFormFieldAppearance = 'outline';

  onSubmit() {
    this.submitted.emit(this.registerForm.value);
  }
}
