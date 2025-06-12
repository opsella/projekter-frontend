import {
  ChangeDetectionStrategy,
  Component,
  signal,
  WritableSignal,
} from "@angular/core";
import { ProjectService } from "../services/project.service";
import { Router } from "@angular/router";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import {
  CreateProjectRequest,
  Project,
  ProjectState,
} from "../../models/project";
import { HttpResourceRef } from "@angular/common/http";
import { MatSelectChange } from "@angular/material/select";
import { MatDialog } from "@angular/material/dialog";
import { ProjectCreationDialogComponent } from "../project-creation-dialog/project-creation-dialog.component";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ProjectId } from "../../models/ids/project-id";
import { Observable, of, switchMap, take, tap } from "rxjs";

@Component({
  selector: "app-project-data-list",
  templateUrl: "./project-data-list.component.html",
  styleUrls: ["./project-data-list.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class ProjectDataListComponent {
  public filterProjectState: WritableSignal<ProjectState> = signal("Draft");

  public projectCreationForm = new FormGroup({
    projectName: new FormControl("", [Validators.required]),
    image: new FormControl(""),
  });

  protected projects: HttpResourceRef<Project[]> = this.projectService.projects(
    this.filterProjectState,
  );

  constructor(
    private projectService: ProjectService,
    private dialog: MatDialog,
    private router: Router,
    private snackbar: MatSnackBar,
  ) {}

  public async viewDetails(id: ProjectId): Promise<void> {
    await this.router.navigate(["project/details", id]);
  }

  public onFilterChanged(value: MatSelectChange<string>): void {
    this.filterProjectState.set(value.value as ProjectState);
  }

  public createProject(): void {
    const ref = this.dialog.open(ProjectCreationDialogComponent);

    ref
      .afterClosed()
      .pipe(
        switchMap((result: CreateProjectRequest | boolean) => {
          let response: Observable<Project> = of(null) as Observable<Project>;

          if (result instanceof CreateProjectRequest) {
            response = this.projectService.createProject(result);

            this.snackbar.open("Project POSTed to Server", null, {
              duration: 2000,
            });
            this.snackbar.open("Project POSTed to Server", null, {
              duration: 2000,
            });
          } else {
            this.snackbar.open("Project Creation Canceled", null, {
              duration: 2000,
            });
          }

          return response;
        }),
        tap(async (result: Project): Promise<void> => {
          await this.viewDetails(result.id);
        }),
        take(1),
      )
      .subscribe();
  }
}
