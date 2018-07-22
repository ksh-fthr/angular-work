import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchTabComponent } from './switch-tab.component';

describe('SwitchTabComponent', () => {
  let component: SwitchTabComponent;
  let fixture: ComponentFixture<SwitchTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
