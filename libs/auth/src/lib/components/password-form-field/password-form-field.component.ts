import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { MatFormFieldAppearance } from '@angular/material/form-field'

@Component({
  selector: 'mc-password-input',
  templateUrl: './password-form-field.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PasswordFormFieldComponent {
  hide = false;

  @Input() showError = false;
  @Input() name = 'password';
  @Input() errorText = '';
  @Input() label = 'Password';
  @Input() formAppearance: MatFormFieldAppearance = 'standard'
}
