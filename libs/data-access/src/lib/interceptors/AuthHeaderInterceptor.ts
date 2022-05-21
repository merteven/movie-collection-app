import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL, JWT_TOKEN } from '../injection-tokens';

@Injectable()
export class AuthHeaderInterceptor implements HttpInterceptor {
  constructor(
    @Inject(BASE_URL) private baseUrl: string,
    @Inject(JWT_TOKEN) private token: string | null
  ) {}

  intercept(
    req: HttpRequest<never>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const clonedRequest = req.clone({
      url: `${this.baseUrl}/${req.url}`,
      setHeaders: this.token ? { Authorization: `Bearer ${this.token}` } : {},
    });
    return next.handle(clonedRequest);
  }
}
