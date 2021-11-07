import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnChangeVerificationComponent } from './on-change-verification.component';

describe('OnChangeVerificationComponent', () => {
  let component: OnChangeVerificationComponent;
  let fixture: ComponentFixture<OnChangeVerificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OnChangeVerificationComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnChangeVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
