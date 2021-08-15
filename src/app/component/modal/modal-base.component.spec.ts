import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBaseComponent } from './modal-base.component';

describe('ModalBaseComponent', () => {
  let component: ModalBaseComponent;
  let fixture: ComponentFixture<ModalBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
