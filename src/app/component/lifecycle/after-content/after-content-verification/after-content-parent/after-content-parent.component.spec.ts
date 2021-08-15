import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterContentParentComponent } from './after-content-parent.component';

describe('AfterContentParentComponent', () => {
  let component: AfterContentParentComponent;
  let fixture: ComponentFixture<AfterContentParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfterContentParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterContentParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
