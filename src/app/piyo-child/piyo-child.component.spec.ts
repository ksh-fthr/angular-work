import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiyoChildComponent } from './piyo-child.component';

describe('PiyoChildComponent', () => {
  let component: PiyoChildComponent;
  let fixture: ComponentFixture<PiyoChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiyoChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiyoChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
