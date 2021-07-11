import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentChildBaseComponent } from './parent-child-base.component';

describe('ParentChildBaseComponent', () => {
  let component: ParentChildBaseComponent;
  let fixture: ComponentFixture<ParentChildBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentChildBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentChildBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
