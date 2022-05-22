import {
  Component,
  ChangeDetectionStrategy,
  EventEmitter,
  Output,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

const nameMinLength = 3;
const nameMaxLength = 50;

@Component({
  selector: 'mc-collection-create-form',
  templateUrl: './collection-create-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CollectionCreateFormComponent {
  @Output() submitted = new EventEmitter<{ name: string }>();

  createForm = new FormGroup(
    {
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(nameMinLength),
        Validators.maxLength(nameMaxLength),
      ]),
    },
    { updateOn: 'change' }
  );

  readonly fieldName = 'name';
  readonly fieldErrorText = `Name must be at least ${nameMinLength} and at most ${nameMaxLength} characters long`;
  get shouldShowNameError(): boolean {
    return this.createForm.get(this.fieldName)?.invalid ?? false;
  }

  onSubmit() {
    this.submitted.emit(this.createForm.value);
  }
}
