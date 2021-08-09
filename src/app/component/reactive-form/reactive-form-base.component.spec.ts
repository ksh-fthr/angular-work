import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormBaseComponent } from './reactive-form-base.component';

describe('ReactiveFormBaseComponent', () => {
  let component: ReactiveFormBaseComponent;
  let fixture: ComponentFixture<ReactiveFormBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
