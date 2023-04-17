import { TestBed } from '@angular/core/testing';

import { InloginGuard } from './inlogin.guard';

describe('InloginGuard', () => {
  let guard: InloginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(InloginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
