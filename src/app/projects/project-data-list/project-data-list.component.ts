import {
  ChangeDetectionStrategy,
  Component,
  signal,
  WritableSignal,
} from "@angular/core";
import { ProjectService } from "../services/project.service";
import { Router } from "@angular/router";
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
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {Select, SelectChangeEvent} from "primeng/select";
import {Toast} from "primeng/toast";

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

  protected states: string[] = ['Draft', 'Published'];
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
    let ref: DynamicDialogRef<ProjectCreationDialogComponent>;

    this.orgService
      .getProjectStatuses()
      .subscribe({
        next: (result: ProjectStatus[]): void => {
          ref = this.dialogService
            .open(ProjectCreationDialogComponent, {
              header: "Create New Project",
              contentStyle: {"overflow": "auto"},

              inputValues:{
                statuses: result
              },
              modal: true
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
                    severity: 'info',
                    summary: 'Created',
                    detail: 'Project created successfully',
                    life: 3000,
                  });
                } else {
                  this.messageService.add({
                    severity: 'warn',
                    summary: 'Canceled',
                    detail: 'Project creation was canceled',
                    life: 3000,
                  });
                }
              },
              error: (): void => {
                this.messageService.add({
                  severity: 'error',
                  summary: 'Failed',
                  detail: 'Project creation failed, please try again',
                  life: 3000,
                });
              },
            });
        },
        error: () => {},
      });
  }
}
