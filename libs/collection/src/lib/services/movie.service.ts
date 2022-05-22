import { Injectable } from '@angular/core';
import { MovieProvider } from '@movie-collection/data-access';
import { Observable } from 'rxjs';
import { CollectionItem } from '../models';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private movieProvider: MovieProvider) {}

  search(query: string): Observable<CollectionItem[]> {
    return this.movieProvider.search(query);
  }
}
