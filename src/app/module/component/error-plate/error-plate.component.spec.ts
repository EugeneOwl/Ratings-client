import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorPlateComponent } from './error-plate.component';

describe('ErrorPlateComponent', () => {
  let component: ErrorPlateComponent;
  let fixture: ComponentFixture<ErrorPlateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorPlateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorPlateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
