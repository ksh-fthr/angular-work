import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationVerificationComponent } from './validation-verification.component';

describe('ValidationVerificationComponent', () => {
  let component: ValidationVerificationComponent;
  let fixture: ComponentFixture<ValidationVerificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ValidationVerificationComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
