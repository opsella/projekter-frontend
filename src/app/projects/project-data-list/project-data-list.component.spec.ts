import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ProjectDataListComponent } from "./project-data-list.component";

describe("ProjectDataListComponent", () => {
  let component: ProjectDataListComponent;
  let fixture: ComponentFixture<ProjectDataListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ProjectDataListComponent
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ProjectDataListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
