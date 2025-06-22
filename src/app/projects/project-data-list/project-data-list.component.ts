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
import {
  MatFormField,
  MatLabel,
  MatOption,
  MatSelect,
  MatSelectChange,
} from "@angular/material/select";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ProjectId } from "../../models/ids/project-id";
import { Observable, of, switchMap, take } from "rxjs";
import { ProjectCardComponent } from "../project-card/project-card.component";
import { MatButton } from "@angular/material/button";
import { OrganizationService } from "../../services/organization.service";
import { ProjectCreationDialogComponent } from "../project-creation-dialog/project-creation-dialog.component";
import { ProjectStatus } from "../../models/tenant";

@Component({
  selector: "app-project-data-list",
  templateUrl: "./project-data-list.component.html",
  styleUrls: ["./project-data-list.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatFormField,
    MatLabel,
    MatSelect,
    MatOption,
    ProjectCardComponent,
    MatButton,
  ],
  providers: [ProjectService],
  standalone: true,
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
    private orgService: OrganizationService,
  ) {}

  public async viewDetails(id: ProjectId): Promise<void> {
    await this.router.navigate(["project/details", id.toString()]);
  }

  public onFilterChanged(value: MatSelectChange<string>): void {
    this.filterProjectState.set(value.value as ProjectState);
  }

  public createProject(): void {
    let ref: MatDialogRef<ProjectCreationDialogComponent>;

    this.orgService.getProjectStatuses().subscribe({
      next: (result: ProjectStatus[]): void => {
        ref = this.dialog.open(ProjectCreationDialogComponent, {
          data: result,
        });

        ref
          ?.afterClosed()
          .pipe(
            switchMap(
              (result: CreateProjectRequest | boolean): Observable<Project> => {
                return result instanceof CreateProjectRequest
                  ? this.projectService.createProject(result)
                  : (of(null) as Observable<Project>);
              },
            ),
            take(1),
          )
          .subscribe({
            next: async (result: Project): Promise<void> => {
              if (result) {
                await this.viewDetails(result.id);

                this.snackbar.open("Project created successfully", null, {
                  duration: 2000,
                });
              }
            },
            error: (): void => {
              this.snackbar.open(
                "Project creation failed. Please try again.",
                null,
                {
                  duration: 2000,
                },
              );
            },
          });
      },
      error: () => {},
    });
  }
}
