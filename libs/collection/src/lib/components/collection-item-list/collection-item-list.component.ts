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
  selector: 'mc-collection-item-list',
  templateUrl: './collection-item-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CollectionItemListComponent {
  @Input() collectionItems: CollectionItem[] | null = [];
  @Input() isOwner: boolean | null = false;
  @Input() total: number | null = 0;
  @Input() pageIndex = 0;
  @Input() pageSize = 10;

  @Output() pageChanged = new EventEmitter<PageEvent>();
  @Output() itemRemoved = new EventEmitter<number>();
}
