import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewParentComponent } from './view-parent.component';

describe('ViewParentComponent', () => {
  let component: ViewParentComponent;
  let fixture: ComponentFixture<ViewParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
