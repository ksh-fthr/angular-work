import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoCheckBaseComponent } from './do-check-base.component';

describe('DoCheckBaseComponent', () => {
  let component: DoCheckBaseComponent;
  let fixture: ComponentFixture<DoCheckBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoCheckBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoCheckBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
