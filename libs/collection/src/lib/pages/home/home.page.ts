import { Component, OnInit, OnDestroy } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Subscription } from 'rxjs';
import { Collection } from '../../models';
import { CollectionService } from '../../services/collection.service';

@Component({
  selector: 'mc-home',
  templateUrl: './home.page.html',
})
export class HomePageComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription = new Subscription();
  constructor(private collectionService: CollectionService) {}

  collections: Collection[] = [];

  ngOnInit(): void {
    this.subscriptions.add(
      this.collectionService.get(0, 10).subscribe((collections) => {
        this.collections = collections;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  onPageChange(event: PageEvent) {
    this.subscriptions.add(
      this.collectionService
        .get(event.pageIndex, event.pageSize)
        .subscribe((collections) => {
          this.collections = collections;
        })
    );
  }
}
