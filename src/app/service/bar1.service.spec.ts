import { TestBed, inject } from '@angular/core/testing';

import { Bar1Service } from './bar1.service';

describe('Bar1Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Bar1Service]
    });
  });

  it('should be created', inject([Bar1Service], (service: Bar1Service) => {
    expect(service).toBeTruthy();
  }));
});
