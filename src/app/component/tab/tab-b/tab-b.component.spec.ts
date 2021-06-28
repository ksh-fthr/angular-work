import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabBComponent } from './tab-b.component';

describe('TabBComponent', () => {
  let component: TabBComponent;
  let fixture: ComponentFixture<TabBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
