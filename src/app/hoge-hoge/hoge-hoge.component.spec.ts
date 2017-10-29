import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HogeHogeComponent } from './hoge-hoge.component';

describe('HogeHogeComponent', () => {
  let component: HogeHogeComponent;
  let fixture: ComponentFixture<HogeHogeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HogeHogeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HogeHogeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
