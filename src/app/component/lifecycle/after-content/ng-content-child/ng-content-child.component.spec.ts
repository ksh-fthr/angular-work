import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgContentChildComponent } from './ng-content-child.component';

describe('NgContentChildComponent', () => {
  let component: NgContentChildComponent;
  let fixture: ComponentFixture<NgContentChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgContentChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgContentChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
