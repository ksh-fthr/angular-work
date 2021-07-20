import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterContentChildComponent } from './after-content-child.component';

describe('AfterContentChildComponent', () => {
  let component: AfterContentChildComponent;
  let fixture: ComponentFixture<AfterContentChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfterContentChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterContentChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
