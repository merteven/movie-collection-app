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

  ngOnInit(): void {
    this.subscriptions.add(
      this.collectionService.get(0, 10).subscribe((page) => {
        this.collections = page.content;
        this.total = page.totalElements;
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
        .subscribe((page) => {
          this.collections = page.content;
          this.total = page.totalElements;
        })
    );
  }

  onCreate() {
    this.router.navigateByUrl('/collections/create');
  }
}
