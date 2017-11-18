import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiyoParentComponent } from './piyo-parent.component';

describe('PiyoParentComponent', () => {
  let component: PiyoParentComponent;
  let fixture: ComponentFixture<PiyoParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiyoParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiyoParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
