import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsvAndZipVerificationComponent } from './csv-and-zip-verification.component';

describe('CsvAndZipVerificationComponent', () => {
  let component: CsvAndZipVerificationComponent;
  let fixture: ComponentFixture<CsvAndZipVerificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CsvAndZipVerificationComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsvAndZipVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
