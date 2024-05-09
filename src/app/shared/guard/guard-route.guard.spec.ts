import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { guardRouteGuard } from './guard-route.guard';

describe('guardRouteGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => guardRouteGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
