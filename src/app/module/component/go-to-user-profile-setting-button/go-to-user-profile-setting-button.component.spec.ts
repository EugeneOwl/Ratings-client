import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoToUserProfileSettingButtonComponent } from './go-to-user-profile-setting-button.component';

describe('GoToUserProfileSettingButtonComponent', () => {
  let component: GoToUserProfileSettingButtonComponent;
  let fixture: ComponentFixture<GoToUserProfileSettingButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoToUserProfileSettingButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoToUserProfileSettingButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
