import { ChangeDetectionStrategy, Component, signal, WritableSignal } from "@angular/core";
import { ProjectService } from "../services/project.service";
import { Router } from "@angular/router";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Project, ProjectState } from "../../models/project";
import { HttpResourceRef } from "@angular/common/http";
import { MatSelectChange } from "@angular/material/select";

@Component({
  selector        : "app-project-data-list",
  templateUrl     : "./project-data-list.component.html",
  styleUrls       : ["./project-data-list.component.scss"],
  changeDetection : ChangeDetectionStrategy.OnPush,
  standalone      : false
})
export class ProjectDataListComponent {
  public filterProjectState: WritableSignal<ProjectState> = signal("Draft");

  public projectCreationForm = new FormGroup({
    projectName : new FormControl("", [Validators.required]),
    image       : new FormControl(""),
  });

  protected projects: HttpResourceRef<Project[]> = this.projectService.projects(this.filterProjectState);
  protected openModal = false;

  constructor(
    private projectService: ProjectService,
    private router: Router,
  ) {
  }

  public async viewDetails(id: string): Promise<void> {
    await this.router.navigate([
      "project/details", id
    ]);
  }

  public onFilterChanged(value: MatSelectChange<string>) {
    this.filterProjectState.set(value.value as ProjectState);
  }

  public createProject() {
    this.openModal = true;
  }

  public onSubmit() {
    // const project = new Project(
    //   this.projectCreationForm.get("projectName").value,
    //   "Draft"
    //
    // );
    //
    // this.projectService.createProject<Project>(project).subscribe({
    //   next: async (project: Project): Promise<void> => {
    //     await this.router.navigate([
    //       "project/details", project.id
    //     ], {
    //       queryParams: { new: true },
    //     });
    //   },
    //   error: (err) => {
    //     console.log(err);
    //   },
    // });

    this.openModal = false;
  }
}
