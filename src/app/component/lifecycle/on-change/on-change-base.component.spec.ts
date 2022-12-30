import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnChangeBaseComponent } from './on-change-base.component';

describe('OnChangeBaseComponent', () => {
  let component: OnChangeBaseComponent;
  let fixture: ComponentFixture<OnChangeBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OnChangeBaseComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnChangeBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
