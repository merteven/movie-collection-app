import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'mc-login-page',
  templateUrl: './login-page.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPage implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
