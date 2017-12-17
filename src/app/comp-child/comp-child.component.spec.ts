import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompChildComponent } from './comp-child.component';

describe('CompChildComponent', () => {
  let component: CompChildComponent;
  let fixture: ComponentFixture<CompChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
