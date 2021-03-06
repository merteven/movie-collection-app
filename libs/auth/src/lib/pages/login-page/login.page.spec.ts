import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '@movie-collection/core';
import { of } from 'rxjs';
import { AuthModule } from '../../auth.module';

import { LoginPageComponent } from './login.page';

describe('LoginPage', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;
  let router: Router;

  const username = 'username';
  const authService: Partial<AuthService> = {
    login: jest.fn().mockReturnValue(of({ username: username })),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginPageComponent],
      imports: [
        AuthModule,
        NoopAnimationsModule,
        HttpClientTestingModule,
        RouterTestingModule,
      ],
      providers: [{ provide: AuthService, useValue: authService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageComponent);
    router = TestBed.inject(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const navigateSpy = jest.spyOn(router, 'navigateByUrl');

    const password = 'password';
    component.onLogin({ username, password });

    expect(authService.login).toBeCalled();
    expect(authService.login).toBeCalledWith(username, password);
    expect(navigateSpy).toBeCalledWith('/');
  });
});
