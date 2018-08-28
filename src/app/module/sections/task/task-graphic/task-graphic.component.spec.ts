import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskGraphicComponent } from './task-graphic.component';

describe('TaskGraphicComponent', () => {
  let component: TaskGraphicComponent;
  let fixture: ComponentFixture<TaskGraphicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskGraphicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskGraphicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
