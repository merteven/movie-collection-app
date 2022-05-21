import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CollectionDTO } from '../models/collection';
import { BaseProvider } from './base.provider';

@Injectable({
  providedIn: 'root',
})
export class CollectionProvider extends BaseProvider {
  create(name: string): Observable<CollectionDTO> {
    return this.httpClient.post<CollectionDTO>('/collections', { name });
  }

  getById(id: number): Observable<CollectionDTO> {
    return this.httpClient.get<CollectionDTO>(`/collections/${id}`);
  }

  get(page: number, size: number): Observable<CollectionDTO[]> {
    return this.httpClient.get<CollectionDTO[]>('/collections', {
      params: { page, size },
    });
  }

  getOwned(page: number, size: number): Observable<CollectionDTO[]> {
    return this.httpClient.get<CollectionDTO[]>('/collections/owned', {
      params: { page, size },
    });
  }

  updateName(id: number, name: string): Observable<CollectionDTO> {
    return this.httpClient.patch<CollectionDTO>(`/collections/${id}/name`, {
      name,
    });
  }

  remove(id: number): Observable<unknown> {
    return this.httpClient.delete(`/collections/${id}`);
  }
}
