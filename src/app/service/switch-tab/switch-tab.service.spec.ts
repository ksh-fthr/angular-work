import { TestBed } from '@angular/core/testing';

import { SwitchTabService } from './switch-tab.service';

describe('SwitchTabService', () => {
  let service: SwitchTabService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwitchTabService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
