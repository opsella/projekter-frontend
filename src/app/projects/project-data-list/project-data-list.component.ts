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
import { ProjectId } from "../../models/ids/project-id";
import { Observable, of, switchMap, take } from "rxjs";
import { ProjectCardComponent } from "../project-card/project-card.component";
import { OrganizationService } from "../../services/organization.service";
import { ProjectCreationDialogComponent } from "../project-creation-dialog/project-creation-dialog.component";
import { ProjectStatus } from "../../models/tenant";
import {Button} from "primeng/button";
import {MessageService} from "primeng/api";
import {DialogService} from "primeng/dynamicdialog";
import {Select, SelectChangeEvent} from "primeng/select";

@Component({
  selector: "app-project-data-list",
  templateUrl: "./project-data-list.component.html",
  styleUrls: ["./project-data-list.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ProjectCardComponent,
    Button,
    Select,
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
    private router: Router,
    private orgService: OrganizationService,
    private messageService: MessageService,
    private dialogService: DialogService
  ) {}

  public async viewDetails(id: ProjectId): Promise<void> {
    await this.router.navigate(["project/details", id.toString()]);
  }

  public onFilterChanged(value: SelectChangeEvent): void {
    this.filterProjectState.set(value.value as ProjectState);
  }

  public createProject(): void {
    this.orgService
      .getProjectStatuses()
      .subscribe({
        next: (result: ProjectStatus[]): void => {
          const ref = this.dialogService
            .open(ProjectCreationDialogComponent, {
              inputValues:{
                statuses: result
              },
            });

          ref.onClose
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

                  this.messageService.add({
                    text: 'Project created successfully',
                  });
                }
              },
              error: (): void => {
                this.messageService.add({
                  text: 'Project creation failed. Please try again.',
                });
              },
            });
        },
        error: () => {},
      });
  }
}
