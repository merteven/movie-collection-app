import { Injectable } from '@angular/core';
import { AuthProvider } from '@movie-collection/data-access';
import { BehaviorSubject, Observable, tap } from 'rxjs';

export interface User {
  username: string;
  role: string;
  jwt: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _user = new BehaviorSubject<User | null>(null);

  constructor(private authProvider: AuthProvider) {}

  onInit() {
    const maybeUser = localStorage.getItem('user');
    if (maybeUser === null) {
      return;
    }
    try {
      const parsedUser = JSON.parse(maybeUser);
      if (
        typeof parsedUser?.username === 'string' &&
        typeof parsedUser?.role === 'string' &&
        typeof parsedUser?.jwt === 'string'
      ) {
        this._user.next(parsedUser);
      }
    } catch (e) {
      localStorage.removeItem('user');
    }
  }

  login(username: string, password: string): Observable<User> {
    return this.authProvider
      .login(username, password)
      .pipe(tap((user) => this.setUser(user)));
  }

  logout() {
    this.setUser(null);
  }

  register(username: string, password: string): Observable<User> {
    return this.authProvider
      .register(username, password)
      .pipe(tap((user) => this._user.next(user)));
  }

  get user() {
    return this._user.asObservable();
  }

  setUser(user: User | null) {
    this._user.next(user);
    if (user === null) {
      localStorage.removeItem('user');
    } else {
      localStorage.setItem('user', JSON.stringify(user));
    }
  }
}
