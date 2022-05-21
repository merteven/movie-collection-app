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
  selector: 'movie-collection-collection-table',
  templateUrl: './collection-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CollectionTableComponent {
  @Input() collections: Collection[] = [];
  @Output() pageChanged = new EventEmitter<PageEvent>();

  readonly displayedColumns: string[] = ['id', 'name', 'username'];
}
