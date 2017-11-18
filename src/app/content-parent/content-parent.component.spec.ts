import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentParentComponent } from './content-parent.component';

describe('ParentComponent', () => {
  let component: ContentParentComponent;
  let fixture: ComponentFixture<ContentParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
