import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterViewChildComponent } from './after-view-child.component';

describe('AfterViewChildComponent', () => {
  let component: AfterViewChildComponent;
  let fixture: ComponentFixture<AfterViewChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfterViewChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterViewChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
