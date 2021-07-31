import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingBaseComponent } from './routing.base.component';

describe('RoutingBaseComponent', () => {
  let component: RoutingBaseComponent;
  let fixture: ComponentFixture<RoutingBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoutingBaseComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
