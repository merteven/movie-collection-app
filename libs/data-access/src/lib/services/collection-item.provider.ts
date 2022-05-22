import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieDTO, MoviePage } from '../models/collection';
import { BaseProvider } from './base.provider';

@Injectable({
  providedIn: 'root',
})
export class CollectionItemProvider extends BaseProvider {
  create(collectionId: number, movieId: number): Observable<MovieDTO> {
    return this.httpClient.post<MovieDTO>(
      `/collections/${collectionId}/items`,
      { movieId }
    );
  }

  get(
    collectionId: number,
    page: number,
    size: number,
    query: string | null = null
  ): Observable<MoviePage> {
    return this.httpClient.get<MoviePage>(
      `/collections/${collectionId}/items`,
      { params: query ? { page, size, query } : { page, size } }
    );
  }

  remove(collectionId: number, movieId: number): Observable<unknown> {
    return this.httpClient.delete(
      `/collections/${collectionId}/items/${movieId}`
    );
  }
}
