import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Inject, Injectable, OnDestroy } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Observable, Subscription } from 'rxjs';
import { BASE_URL } from '@movie-collection/data-access';

@Injectable()
export class AuthHeaderInterceptor implements HttpInterceptor, OnDestroy {
  constructor(
    @Inject(BASE_URL) private baseUrl: string,
    private authService: AuthService
  ) {}

  private token: string | null = null;
  private subscription: Subscription | null = null;

  init() {
    this.subscription = this.authService.user.subscribe((user) => {
      this.token = user?.jwt ?? null;
    });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  intercept(
    req: HttpRequest<never>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const clonedRequest = req.clone({
      url: `${this.baseUrl}${req.url}`,
      setHeaders: this.token ? { Authorization: `Bearer ${this.token}` } : {},
    });
    return next.handle(clonedRequest);
  }
}
