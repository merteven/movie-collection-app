import { Component, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@movie-collection/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'mc-register',
  templateUrl: './register.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterPageComponent implements OnDestroy {
  private subscription: Subscription | null = null;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  onRegister({ username, password }: { username: string; password: string }) {
    this.subscription = this.authService
      .register(username, password)
      .subscribe(() => {
        this.router.navigateByUrl('/');
      });
  }
}
