import { TestBed, inject } from '@angular/core/testing';

import { SwitchTabService } from './switch-tab.service';

describe('SwitchTabService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SwitchTabService]
    });
  });

  it('should be created', inject([SwitchTabService], (service: SwitchTabService) => {
    expect(service).toBeTruthy();
  }));
});
