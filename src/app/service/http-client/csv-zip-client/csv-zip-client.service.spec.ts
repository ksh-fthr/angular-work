import { TestBed } from '@angular/core/testing';

import { CsvZipClientService } from './csv-zip-client.service';

describe('CsvZipClientService', () => {
  let service: CsvZipClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CsvZipClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
