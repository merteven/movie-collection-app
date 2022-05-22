import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '@movie-collection/core';
import {
  BehaviorSubject,
  combineLatest,
  debounceTime,
  distinctUntilChanged,
  map,
  ReplaySubject,
  startWith,
  Subscription,
  switchMap,
} from 'rxjs';
import { Collection, CollectionItem } from '../../models';
import { CollectionItemService } from '../../services/collection-item.service';
import { CollectionService } from '../../services/collection.service';

interface Page {
  index: number;
  size: number;
}

@Component({
  selector: 'mc-collection',
  templateUrl: './collection.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CollectionPageComponent implements OnInit, OnDestroy {
  private subscription = new Subscription();

  constructor(
    private collectionService: CollectionService,
    private collectionItemService: CollectionItemService,
    private authService: AuthService,
    private route: ActivatedRoute
  ) {}

  collection$ = new ReplaySubject<Collection>(1);
  collectionItems$ = new BehaviorSubject<CollectionItem[]>([]);
  isOwner$ = combineLatest([this.authService.user, this.collection$]).pipe(
    map(([user, collection]) => user?.username === collection.username)
  );
  page$ = new BehaviorSubject<Page>({
    index: 0,
    size: 10,
  });
  total$ = new BehaviorSubject(0);

  private query$ = new ReplaySubject<string>(1);
  private itemRemoved$ = new ReplaySubject<number>(1);
  private itemRemoveRequest$ = new ReplaySubject<number>(1);

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = Number.parseInt(params['id']);
      if (Number.isNaN(id)) {
        throw new Error('Invalid collection id');
      }
      this.getCollection(id);
      this.getCollectionItems();
      this.removeItem();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onPageChanged($event: PageEvent) {
    this.page$.next({ index: $event.pageIndex, size: $event.pageSize });
  }

  onItemRemoved($event: number) {
    this.itemRemoveRequest$.next($event);
  }

  onQueryChange($event: Event) {
    const target = $event.target as HTMLInputElement;
    this.query$.next(target.value);
  }

  private getCollectionItems() {
    this.subscription.add(
      combineLatest([
        this.collection$,
        this.page$,
        this.query$.pipe(
          debounceTime(300),
          distinctUntilChanged(),
          startWith(null)
        ),
        this.itemRemoved$.pipe(startWith(0)),
      ])
        .pipe(
          switchMap(([collection, page, query]) =>
            this.collectionItemService.get(
              collection.id,
              page.index,
              page.size,
              query
            )
          )
        )
        .subscribe((page) => {
          this.collectionItems$.next(page.content);
          this.total$.next(page.totalElements);
        })
    );
  }

  private getCollection(collectionId: number) {
    this.subscription.add(
      this.collectionService.getById(collectionId).subscribe((collection) => {
        this.collection$.next(collection);
      })
    );
  }

  private removeItem() {
    combineLatest([this.itemRemoveRequest$, this.collection$])
      .pipe(
        switchMap(([itemId, collection]) =>
          this.collectionItemService
            .remove(collection.id, itemId)
            .pipe(map(() => itemId))
        )
      )
      .subscribe((itemId) => {
        this.itemRemoved$.next(itemId);
        this.page$.next({ index: 0, size: 10 });
      });
  }
}
