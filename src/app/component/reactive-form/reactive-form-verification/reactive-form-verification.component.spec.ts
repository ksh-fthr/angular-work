import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormVerificationComponent } from './reactive-form-verification.component';

describe('ReactiveFormVerificationComponent', () => {
  let component: ReactiveFormVerificationComponent;
  let fixture: ComponentFixture<ReactiveFormVerificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormVerificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
