import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgContentParentComponent } from './ng-content-parent.component';

describe('NgContentParentComponent', () => {
  let component: NgContentParentComponent;
  let fixture: ComponentFixture<NgContentParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgContentParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgContentParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
