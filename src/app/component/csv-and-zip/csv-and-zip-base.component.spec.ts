import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsvAndZipBaseComponent } from './csv-and-zip-base.component';

describe('CsvAndZipBaseComponent', () => {
  let component: CsvAndZipBaseComponent;
  let fixture: ComponentFixture<CsvAndZipBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CsvAndZipBaseComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsvAndZipBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
