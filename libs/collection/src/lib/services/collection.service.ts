import { Injectable } from '@angular/core';
import { CollectionProvider } from '@movie-collection/data-access';
import { Observable } from 'rxjs';
import { Collection, CollectionPage } from '../models';

@Injectable({
  providedIn: 'root',
})
export class CollectionService {
  constructor(private collectionProvider: CollectionProvider) {}

  create(name: string): Observable<Collection> {
    return this.collectionProvider.create(name);
  }

  get(page: number, pageSize: number): Observable<CollectionPage> {
    return this.collectionProvider.get(page, pageSize);
  }

  getOwned(page: number, pageSize: number): Observable<CollectionPage> {
    return this.collectionProvider.getOwned(page, pageSize);
  }

  getById(id: number): Observable<Collection> {
    return this.collectionProvider.getById(id);
  }
}
