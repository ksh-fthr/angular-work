import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterContentBaseComponent } from './after-content-base.component';

describe('AfterContentBaseComponent', () => {
  let component: AfterContentBaseComponent;
  let fixture: ComponentFixture<AfterContentBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AfterContentBaseComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterContentBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
