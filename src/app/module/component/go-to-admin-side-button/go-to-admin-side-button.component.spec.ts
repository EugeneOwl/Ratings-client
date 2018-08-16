import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoToAdminSideButtonComponent } from './go-to-admin-side-button.component';

describe('GoToAdminSideButtonComponent', () => {
  let component: GoToAdminSideButtonComponent;
  let fixture: ComponentFixture<GoToAdminSideButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoToAdminSideButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoToAdminSideButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
