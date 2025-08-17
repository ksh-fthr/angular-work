import { TestBed } from '@angular/core/testing';

import { IStateService } from './istate.service';

describe('IStateService', () => {
  let service: IStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
