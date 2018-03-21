import { TestBed, inject } from '@angular/core/testing';

import { Bar2Service } from './bar2.service';

describe('Bar2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Bar2Service]
    });
  });

  it('should be created', inject([Bar2Service], (service: Bar2Service) => {
    expect(service).toBeTruthy();
  }));
});
