import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTaskCompletionDialogComponent } from './project-task-completion-dialog.component';

describe('ProjectTaskCompletionDialogComponent', () => {
  let component: ProjectTaskCompletionDialogComponent;
  let fixture: ComponentFixture<ProjectTaskCompletionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectTaskCompletionDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectTaskCompletionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
