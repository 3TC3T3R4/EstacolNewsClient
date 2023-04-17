import { TestBed } from '@angular/core/testing';

import { LobbyPermitionsGuard } from './lobby-permitions.guard';

describe('LobbyPermitionsGuard', () => {
  let guard: LobbyPermitionsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LobbyPermitionsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
