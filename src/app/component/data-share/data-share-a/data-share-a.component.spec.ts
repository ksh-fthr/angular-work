import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataShareAComponent } from './data-share-a.component';

describe('DataShareAComponent', () => {
  let component: DataShareAComponent;
  let fixture: ComponentFixture<DataShareAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataShareAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataShareAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
