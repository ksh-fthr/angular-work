import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabAComponent } from './tab-a.component';

describe('TabAComponent', () => {
  let component: TabAComponent;
  let fixture: ComponentFixture<TabAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
