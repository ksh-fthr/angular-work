import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationBaseComponent } from './validation-base.component';

describe('ValidationBaseComponent', () => {
  let component: ValidationBaseComponent;
  let fixture: ComponentFixture<ValidationBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ValidationBaseComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
