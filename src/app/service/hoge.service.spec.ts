import { TestBed, inject } from '@angular/core/testing';

import { HogeService } from './hoge.service';

describe('HogeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HogeService]
    });
  });

  it('should be created', inject([HogeService], (service: HogeService) => {
    expect(service).toBeTruthy();
  }));
});
