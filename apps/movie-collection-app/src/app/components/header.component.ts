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
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  @Input() user: User | null = null;
  @Output() logout = new EventEmitter();
}
