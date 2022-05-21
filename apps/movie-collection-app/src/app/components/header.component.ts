import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'mc-header',
  template: `<header class="flex justify-around bg-blue-400 text-white p-2">
    <h1>Movie Collection App</h1>
    <div>
      <a mat-button routerLink="auth/login">Login</a>
      /
      <a mat-button routerLink="auth/register">Register</a>
    </div>
  </header>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}
