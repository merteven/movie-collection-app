import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieDTO } from '../models/collection';
import { BaseProvider } from './base.provider';

@Injectable({
  providedIn: 'root',
})
export class MovieProvider extends BaseProvider {
  search(query: string): Observable<MovieDTO[]> {
    return this.httpClient.get<MovieDTO[]>('/movies', { params: { query } });
  }
}
