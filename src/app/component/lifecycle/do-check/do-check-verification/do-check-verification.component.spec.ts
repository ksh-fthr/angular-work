import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoCheckVerificationComponent } from './do-check-verification.component';

describe('DoCheckVerificationComponent', () => {
  let component: DoCheckVerificationComponent;
  let fixture: ComponentFixture<DoCheckVerificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoCheckVerificationComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoCheckVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
