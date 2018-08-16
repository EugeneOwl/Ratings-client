import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoToUserSideButtonComponent } from './go-to-user-side-button.component';

describe('GoToUserSideButtonComponent', () => {
  let component: GoToUserSideButtonComponent;
  let fixture: ComponentFixture<GoToUserSideButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoToUserSideButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoToUserSideButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
