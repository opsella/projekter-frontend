import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ProjectAddSpecificationDialogComponent } from "./project-add-specification-dialog.component";

describe("ProjectAddSpecificationDialogComponent", () => {
  let component: ProjectAddSpecificationDialogComponent;
  let fixture: ComponentFixture<ProjectAddSpecificationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectAddSpecificationDialogComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ProjectAddSpecificationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
