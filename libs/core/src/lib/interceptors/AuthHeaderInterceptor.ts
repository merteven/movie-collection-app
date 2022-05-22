import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Observable, switchMap } from 'rxjs';
import { BASE_URL } from '@movie-collection/data-access';

@Injectable()
export class AuthHeaderInterceptor implements HttpInterceptor {
  constructor(
    @Inject(BASE_URL) private baseUrl: string,
    private authService: AuthService
  ) {}

  intercept(
    req: HttpRequest<never>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return this.authService.user.pipe(
      switchMap((user) => {
        const clonedRequest = req.clone({
          url: `${this.baseUrl}${req.url}`,
          setHeaders: user?.jwt ? { Authorization: `Bearer ${user?.jwt}` } : {},
        });
        return next.handle(clonedRequest);
      })
    );
  }
}
