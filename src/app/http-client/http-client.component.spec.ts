import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientComponent } from './http-client.component';

describe('HttpClientComponent', () => {
  let component: HttpClientComponent;
  let fixture: ComponentFixture<HttpClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
