import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeDirectiveVerificationComponent } from './attribute-directive-verification.component';

describe('AttributeDirectiveVerificationComponent', () => {
  let component: AttributeDirectiveVerificationComponent;
  let fixture: ComponentFixture<AttributeDirectiveVerificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttributeDirectiveVerificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributeDirectiveVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
