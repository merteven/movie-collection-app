import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieDTO } from '../models/collection';
import { BaseProvider } from './base.provider';

@Injectable({
  providedIn: 'root',
})
export class CollectionItemProvider extends BaseProvider {
  create(
    collectionId: number,
    movieId: number,
    title: string
  ): Observable<MovieDTO> {
    return this.httpClient.post<MovieDTO>(
      `/collections/${collectionId}/items`,
      { movieId, title }
    );
  }

  get(collectionId: number): Observable<MovieDTO[]> {
    return this.httpClient.get<MovieDTO[]>(
      `/collections/${collectionId}/items`
    );
  }

  remove(collectionId: number, movieId: number): Observable<unknown> {
    return this.httpClient.delete(
      `/collections/${collectionId}/items/${movieId}`
    );
  }
}
