import { TestBed } from '@angular/core/testing';

import { LowStateService } from './low-state.service';

describe('LowStateService', () => {
  let service: LowStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LowStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
