import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenceBaseComponent } from './reference-base.component';

describe('ReferenceBaseComponent', () => {
  let component: ReferenceBaseComponent;
  let fixture: ComponentFixture<ReferenceBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferenceBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferenceBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
