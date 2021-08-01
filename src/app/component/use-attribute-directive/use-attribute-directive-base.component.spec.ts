import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseAttributeDirectiveBaseComponent } from './use-attribute-directive-base.component';

describe('UseAttributeDirectiveBaseComponent', () => {
  let component: UseAttributeDirectiveBaseComponent;
  let fixture: ComponentFixture<UseAttributeDirectiveBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UseAttributeDirectiveBaseComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UseAttributeDirectiveBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
