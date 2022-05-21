import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'mc-header',
  template: `<header class="flex justify-between items-center bg-blue-400 text-white px-4 h-16">
    <h1 class="!m-0">Movie Collection App</h1>
    <div class="flex items-center">
      <a mat-button routerLink="auth/login">Login</a>
      <span>/</span>
      <a mat-button routerLink="auth/register">Register</a>
    </div>
  </header>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}
