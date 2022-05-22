import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Collection } from '../../models';

@Component({
  selector: 'mc-collection-table',
  templateUrl: './collection-table.component.html',
  styles: [
    `
      :host {
        width: 100%;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CollectionTableComponent {
  @Input() collections: Collection[] = [];
  @Input() total = 0;
  @Input() pageIndex = 0;
  @Input() pageSize = 10;
  @Output() pageChanged = new EventEmitter<PageEvent>();

  readonly displayedColumns: string[] = ['id', 'name', 'username'];
}
