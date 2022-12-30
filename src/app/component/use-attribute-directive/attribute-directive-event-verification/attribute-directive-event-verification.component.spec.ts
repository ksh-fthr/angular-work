import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeDirectiveEventVerificationComponent } from './attribute-directive-event-verification.component';

describe('AttributeDirectiveEventVerificationComponent', () => {
  let component: AttributeDirectiveEventVerificationComponent;
  let fixture: ComponentFixture<AttributeDirectiveEventVerificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AttributeDirectiveEventVerificationComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributeDirectiveEventVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
