import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { MatSidenavModule }                     from '@angular/material/sidenav';
import { UserToolbarComponent }                 from './user-toolbar.component';

describe('UserToolbarComponent', () => {
  let component: UserToolbarComponent;
  let fixture: ComponentFixture<UserToolbarComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [UserToolbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
