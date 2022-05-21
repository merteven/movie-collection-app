import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDTO } from '../models/auth';
import { BaseProvider } from './base.provider';

@Injectable({
  providedIn: 'root',
})
export class AuthProvider extends BaseProvider {
  login(username: string, password: string): Observable<UserDTO> {
    return this.httpClient.post<UserDTO>('/auth/login', {
      username,
      password,
    });
  }

  register(username: string, password: string): Observable<UserDTO> {
    return this.httpClient.post<UserDTO>('/auth/register', {
      username,
      password,
    });
  }
}
