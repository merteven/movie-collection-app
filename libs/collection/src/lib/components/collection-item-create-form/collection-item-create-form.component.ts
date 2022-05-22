import {
  Component,
  Output,
  EventEmitter,
  Input,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import {
  debounceTime,
  distinctUntilChanged,
  ReplaySubject,
  Subscription,
} from 'rxjs';
import { CollectionItem } from '../../models';

@Component({
  selector: 'mc-collection-item-create-form',
  templateUrl: './collection-item-create-form.component.html',
})
export class CollectionItemCreateFormComponent implements OnInit, OnDestroy {
  @Input() options: CollectionItem[] = [];
  @Output() inputChanged = new EventEmitter<string>();
  @Output() submitted = new EventEmitter<number>();

  selectedItem: CollectionItem | null = null;
  showItemSummary = false;
  inputValue = '';

  private input$ = new ReplaySubject<string>(1);
  private subscription = new Subscription();

  ngOnInit() {
    this.subscription.add(
      this.input$
        .pipe(debounceTime(300), distinctUntilChanged())
        .subscribe((value) => {
          this.inputChanged.emit(value);
        })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  extractLabel(item: CollectionItem) {
    return item.title;
  }

  onSubmit() {
    if (this.selectedItem) {
      this.submitted.emit(this.selectedItem.id);
    }
  }

  onInput($event: Event) {
    const input = $event.target as HTMLInputElement;
    this.input$.next(input.value);
    this.inputValue = input.value;
  }

  onOptionSelected($event: MatAutocompleteSelectedEvent) {
    console.log();
    this.selectedItem = $event.option.value as CollectionItem;
    this.showItemSummary = true;
  }

  onClear() {
    this.selectedItem = null;
    this.showItemSummary = false;
    this.inputValue = '';
  }
}
