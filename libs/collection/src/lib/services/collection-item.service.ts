import { Injectable } from '@angular/core';
import { CollectionItemProvider } from '@movie-collection/data-access';
import { Observable } from 'rxjs';
import { CollectionItem, CollectionItemPage } from '../models';

@Injectable({
  providedIn: 'root',
})
export class CollectionItemService {
  constructor(private collectionItemProvider: CollectionItemProvider) {}

  create(collectionId: number, movieId: number): Observable<CollectionItem> {
    return this.collectionItemProvider.create(collectionId, movieId);
  }

  get(
    collectionId: number,
    page: number,
    pageSize: number,
    query: string | null = null
  ): Observable<CollectionItemPage> {
    return this.collectionItemProvider.get(collectionId, page, pageSize, query);
  }

  remove(collectionId: number, movieId: number): Observable<unknown> {
    return this.collectionItemProvider.remove(collectionId, movieId);
  }
}
