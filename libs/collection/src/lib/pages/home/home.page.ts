import { Component, OnInit, OnDestroy } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Collection } from '../../models';
import { CollectionService } from '../../services/collection.service';

@Component({
  selector: 'mc-home',
  templateUrl: './home.page.html',
})
export class HomePageComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription = new Subscription();
  constructor(
    private collectionService: CollectionService,
    private router: Router
  ) {}

  collections: Collection[] = [];
  total = 0;
  showOwned = false;
  pageIndex = 0;
  pageSize = 10;

  ngOnInit(): void {
    this.getPaginatedCollections();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  onPageChange(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.getPaginatedCollections();
  }

  onCreate() {
    this.router.navigateByUrl('/collections/create');
  }

  onToggleChanged() {
    this.showOwned = !this.showOwned;
    this.pageIndex = 0;
    this.getPaginatedCollections();
  }

  private getPaginatedCollections() {
    if (this.showOwned) {
      this.subscriptions.add(
        this.collectionService
          .getOwned(this.pageIndex, this.pageSize)
          .subscribe((page) => {
            this.collections = page.content;
            this.total = page.totalElements;
          })
      );
    } else {
      this.subscriptions.add(
        this.collectionService
          .get(this.pageIndex, this.pageSize)
          .subscribe((page) => {
            this.collections = page.content;
            this.total = page.totalElements;
          })
      );
    }
  }
}
