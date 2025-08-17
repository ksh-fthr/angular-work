import { TestBed } from '@angular/core/testing';

import { HighStateService } from './high-state.service';

describe('HighStateService', () => {
  let service: HighStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HighStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
