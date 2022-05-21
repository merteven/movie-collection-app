import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@movie-collection/core';

@Component({
  selector: 'mc-root',
  template: `
    <div class="h-full">
      <mc-header [user]="user$ | async" (logout)="onLogout()"></mc-header>
      <main class="h-[calc(100%-4rem)]">
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService.onInit();
  }

  get user$() {
    return this.authService.user;
  }

  onLogout() {
    this.authService.logout();
    this.router.navigateByUrl('/');
  }
}
