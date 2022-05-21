import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'movie-collection-collection-table',
  templateUrl: './collection-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CollectionTableComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
