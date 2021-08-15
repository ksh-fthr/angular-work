import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientVerificationComponent } from './http-client-verification.component';

describe('HttpClientVerificationComponent', () => {
  let component: HttpClientVerificationComponent;
  let fixture: ComponentFixture<HttpClientVerificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpClientVerificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpClientVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
