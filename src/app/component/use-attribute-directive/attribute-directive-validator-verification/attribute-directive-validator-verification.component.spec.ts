import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeDirectiveValidatorVerificationComponent } from './attribute-directive-validator-verification.component';

describe('AttributeDirectiveValidatorVerificationComponent', () => {
  let component: AttributeDirectiveValidatorVerificationComponent;
  let fixture: ComponentFixture<AttributeDirectiveValidatorVerificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttributeDirectiveValidatorVerificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributeDirectiveValidatorVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
