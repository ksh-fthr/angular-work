import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataShareBComponent } from './data-share-b.component';

describe('DataShareBComponent', () => {
  let component: DataShareBComponent;
  let fixture: ComponentFixture<DataShareBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DataShareBComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataShareBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
