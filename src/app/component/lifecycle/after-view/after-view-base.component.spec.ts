import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterViewBaseComponent } from './after-view-base.component';

describe('AfterViewBaseComponent', () => {
  let component: AfterViewBaseComponent;
  let fixture: ComponentFixture<AfterViewBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfterViewBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterViewBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
