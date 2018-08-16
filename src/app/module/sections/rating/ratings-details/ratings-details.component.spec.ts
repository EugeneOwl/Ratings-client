import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingsDetailsComponent } from './ratings-details.component';

describe('RatingsDetailsComponent', () => {
  let component: RatingsDetailsComponent;
  let fixture: ComponentFixture<RatingsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
