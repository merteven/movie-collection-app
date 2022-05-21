import { Injectable } from '@angular/core';
import { CollectionProvider } from '@movie-collection/data-access';
import { Observable } from 'rxjs';
import { Collection } from '../models';

@Injectable({
  providedIn: 'root',
})
export class CollectionService {
  constructor(private collectionProvider: CollectionProvider) {}

  get(page: number, pageSize: number): Observable<Collection[]> {
    return this.collectionProvider.get(page, pageSize);
  }

  getOwned(page: number, pageSize: number): Observable<Collection[]> {
    return this.collectionProvider.getOwned(page, pageSize);
  }
}
