import { TestBed, inject } from '@angular/core/testing';

import { AbstractBarService } from './abstract-bar.service';

describe('AbstractBarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AbstractBarService]
    });
  });

  it('should be created', inject([AbstractBarService], (service: AbstractBarService) => {
    expect(service).toBeTruthy();
  }));
});
