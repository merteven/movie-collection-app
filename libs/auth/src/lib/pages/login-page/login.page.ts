import { Component, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '@movie-collection/core';

@Component({
  selector: 'mc-login-page',
  templateUrl: './login.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent implements OnDestroy {
  private subscription: Subscription | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  onLogin({ username, password }: { username: string; password: string }) {
    this.subscription = this.authService
      .login(username, password)
      .subscribe(() => {
        this.router.navigateByUrl('/');
      });
  }
}
