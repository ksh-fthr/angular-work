import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataShareBaseComponent } from './data-share-base.component';

describe('DataShareBaseComponent', () => {
  let component: DataShareBaseComponent;
  let fixture: ComponentFixture<DataShareBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataShareBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataShareBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
