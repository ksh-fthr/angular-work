import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabBaseComponent } from './tab-base.component';

describe('TabBaaseComponent', () => {
  let component: TabBaseComponent;
  let fixture: ComponentFixture<TabBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabBaseComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
