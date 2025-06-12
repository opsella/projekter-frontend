import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCreationDialogComponent } from './project-creation-dialog.component';

describe("ProjectCreationModalComponent", () => {
  let component: ProjectCreationDialogComponent;
  let fixture: ComponentFixture<ProjectCreationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectCreationDialogComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ProjectCreationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
