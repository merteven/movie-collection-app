import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

const URL = 'http://localhost:8080/api/auth';

interface UserDTO {
  username: string;
  role: string;
  jwt: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _user = new BehaviorSubject<UserDTO | null>(null);

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<UserDTO> {
    return this.http
      .post<UserDTO>(URL + '/login', { username, password })
      .pipe(tap((user) => this._user.next(user)));
  }

  logout() {
    this._user.next(null);
  }

  register(username: string, password: string): Observable<UserDTO> {
    return this.http
      .post<UserDTO>(URL + '/register', { username, password })
      .pipe(tap((user) => this._user.next(user)));
  }

  get user() {
    return this._user.asObservable();
  }
}
