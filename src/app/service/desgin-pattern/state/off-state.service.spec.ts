import { TestBed } from '@angular/core/testing';

import { OffStateService } from './off-state.service';

describe('OffStateService', () => {
  let service: OffStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OffStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
