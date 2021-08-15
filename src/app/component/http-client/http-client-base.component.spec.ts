import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientBaseComponent } from './http-client-base.component';

describe('HttpClientBaseComponent', () => {
  let component: HttpClientBaseComponent;
  let fixture: ComponentFixture<HttpClientBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpClientBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpClientBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
