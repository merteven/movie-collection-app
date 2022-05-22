import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '@movie-collection/core';
import { of } from 'rxjs';
import { AuthModule } from '../../auth.module';

import { RegisterPageComponent } from './register.page';

describe('RegisterPage', () => {
  let component: RegisterPageComponent;
  let fixture: ComponentFixture<RegisterPageComponent>;
  let router: Router;

  const username = 'username';
  const authService: Partial<AuthService> = {
    register: jest.fn().mockReturnValue(of({ username: username })),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterPageComponent],
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
    fixture = TestBed.createComponent(RegisterPageComponent);
    router = TestBed.inject(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const navigateSpy = jest.spyOn(router, 'navigateByUrl');

    const password = 'password';
    component.onRegister({ username, password });

    expect(authService.register).toBeCalled();
    expect(authService.register).toBeCalledWith(username, password);
    expect(navigateSpy).toBeCalledWith('/');
  });
});
