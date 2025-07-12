import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectAddTaskDialogComponent } from './project-add-task-dialog.component';

describe('ProjectAddTaskDialogComponent', () => {
  let component: ProjectAddTaskDialogComponent;
  let fixture: ComponentFixture<ProjectAddTaskDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectAddTaskDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectAddTaskDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
