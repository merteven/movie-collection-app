import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { CollectionItem } from '../../models';

@Component({
  selector: 'mc-collection-item-table',
  templateUrl: './collection-item-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CollectionItemListComponent {
  @Input() collectionItems: CollectionItem[] = [];
  @Input() total = 0;
  @Input() pageIndex = 0;
  @Input() pageSize = 10;

  @Output() pageChanged = new EventEmitter<PageEvent>();
}
