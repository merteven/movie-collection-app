import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { User } from '@movie-collection/core';

@Component({
  selector: 'mc-header',
  template: ` <header
      class="flex justify-between items-center bg-blue-400 text-white px-4 h-16"
    >
      <h1 class="!m-0">Movie Collection App</h1>
      <div class="flex gap-2 items-center">
        <ng-container
          *ngIf="user === null; then userMissing; else userExists"
        ></ng-container>
      </div>
    </header>
    <ng-template #userMissing>
      <a routerLink="auth/login">Login</a>
      <span>/</span>
      <a routerLink="auth/register">Register</a>
    </ng-template>
    <ng-template #userExists>
      <span>Hello, {{ user?.username }}</span>
      <span>/</span>
      <a (click)="logout.emit()">Logout</a>
    </ng-template>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  @Input() user: User | null = null;
  @Output() logout = new EventEmitter();
}
