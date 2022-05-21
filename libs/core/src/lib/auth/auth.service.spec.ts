import { TestBed } from '@angular/core/testing';
import { DataAccessModule } from '@movie-collection/data-access';
import { TestScheduler } from 'rxjs/testing';

import { AuthService, User } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DataAccessModule],
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be clear local storage on init if the user is found invalid', () => {
    const mockFn = jest.fn();

    Object.defineProperty(window, 'localStorage', {
      value: (function () {
        return {
          getItem: function () {
            return '{asd';
          },
          removeItem: mockFn,
        };
      })(),
    });

    service.onInit();
    expect(mockFn).toBeCalled();
  });

  it('should set user on init if it is valid', () => {
    const user: User = { username: 'john', jwt: 'token', role: 'user' };

    Object.defineProperty(window, 'localStorage', {
      value: (function () {
        return {
          getItem: function () {
            return JSON.stringify(user);
          },
        };
      })(),
    });

    const scheduler = new TestScheduler((actual, expected) =>
      expect(actual).toEqual(expected)
    );

    scheduler.run(({ expectObservable }) => {
      service.onInit();
      const expectedMarble = 'a';
      const expectedValues = { a: user };
      expectObservable(service.user).toBe(expectedMarble, expectedValues);
    });
  });
});
