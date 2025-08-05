import {Component, effect, inject, model, ModelSignal, Signal, signal, WritableSignal} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProjectService } from "../services/project.service";
import { HttpResourceRef } from "@angular/common/http";
import {
  Project,
  ProjectAddSpecificationRequest,
  ProjectAddTaskRequest, ProjectTaskCompletionRequest,
  Specification,
  Task
} from "../../models/project";
import { toSignal } from "@angular/core/rxjs-interop";
import {
  ProjectAddSpecificationDialogComponent,
  ProjectAddSpecificationDialogData,
} from "../project-add-specification-dialog/project-add-specification-dialog.component";
import { Observable, of, switchMap, take, tap } from "rxjs";
import { ContentSectionComponent } from "../../shared/content-section/content-section.component";
import {NgOptimizedImage} from "@angular/common";
import {
  SimpleTableComponent,
  TableConfig
} from "../../shared/simple-table/simple-table.component";
import {DialogService, DynamicDialogModule} from "primeng/dynamicdialog";
import {TableModule} from "primeng/table";
import {Button} from "primeng/button";
import {Breadcrumb} from "primeng/breadcrumb";
import {MenuItem} from "primeng/api";
import {AlertService} from "../../core/alert.service";
import {ProjectAddTaskDialogComponent} from "../project-add-task-dialog/project-add-task-dialog.component";
import {Toolbar} from "primeng/toolbar";
import {Chip} from "primeng/chip";
import {ProjectStatusPipe} from "../../shared/project-status.pipe";
import {isAfter, isBefore, isDate, isEqual, subDays } from 'date-fns';
import {
  ProjectTaskCompletionDialogComponent
} from "../project-task-completion-dialog/project-task-completion-dialog.component";
import {ReactiveFormsModule} from "@angular/forms";
import {DiscussionsService} from "../../shared/discussions.service";
import {DiscussionId} from "../../models/ids/discussion-id";
import {Discussion} from "../../models/discussion";
import {
  DiscussionContentSectionComponent
} from "../../shared/discussion-content-section/discussion-content-section.component";

@Component({
  selector: "app-project-details",
  templateUrl: "./project-details.component.html",
  styleUrl: "./project-details.component.scss",
  imports: [
    ContentSectionComponent,
    NgOptimizedImage,
    SimpleTableComponent,
    TableModule,
    Button,
    Breadcrumb,
    Toolbar,
    ContentSectionComponent,
    Chip,
    ProjectStatusPipe,
    ReactiveFormsModule,
    DiscussionContentSectionComponent,
  ],
  providers: [
    ProjectService,
    DynamicDialogModule
  ],
  standalone: true,
})
export class ProjectDetailsComponent {
  private route = inject(ActivatedRoute);
  private params = toSignal(this.route.params, { initialValue: { id: "" } });
  private projectId = signal(this.params().id);

  protected project: HttpResourceRef<Project> = this.projectService.project(this.projectId);
  protected discussionId: WritableSignal<DiscussionId | null> = signal(null);
  protected discussionResponse: HttpResourceRef<Discussion | null> = this.discussionsService.getDiscussion(this.discussionId);
  protected discussion: WritableSignal<Discussion | null> = model(null);

  protected breadcrumbItems: MenuItem[] = [
    {
      label: 'projects',
      routerLink: '/project'
    },
    {
      label: 'project',
    }
  ];
  protected home: MenuItem = {
    icon: 'pi pi-home',
    routerLink: '/project'
  };

  protected selectedTasks: ModelSignal<Task[]> = model([]);
  protected taskTableConfig: TableConfig<Task> = {
    columns: [
      {
        id: 'due_date',
        name: 'Due Date',
        transform: (item: Task): string => {
          if (item.due_date) {
            return item.due_date.toLocaleDateString();
          } else {
            return "";
          }
        }
      },
      {
        id: 'name',
        key: 'name',
        name: 'Name'
      },
      {
        id: 'description',
        key: 'description',
        name: 'Description'
      },
      {
        id: 'completed_at',
        name: 'Completed On',
        transform: (item: Task) => {
          if (item.completed_at) {
            return item.completed_at?.toLocaleDateString();
          } else {
            return "";
          }
        }
      }
    ],
    actions: [
      {
        tooltip: "Complete",
        icon: "pi pi-check-circle",
        fn: (x: Task) => {
          console.log("Attempt to complete task: ", x);
          this.completeTask(x);
        }
      },
      {
        tooltip: "Edit",
        icon: "pi pi-pencil",
        severity: "secondary",
        fn: (x) => {}
      },
    ],
    alertConfig: {
      fn: (item: Task) => {
        if (!isDate(item.due_date))
          return null;

        const currentDate = new Date();
        const alertWarnDate = subDays<Date>(item.due_date, 7);

        if (isBefore(currentDate, alertWarnDate)) {
          return null;
        } else if (
          isEqual(currentDate, alertWarnDate) ||
          (isAfter(currentDate, alertWarnDate) && isBefore(currentDate, item.due_date))
        ) {
          return {
            icon: "pi pi-exclamation-triangle",
            tooltip: "Due within 7 Days",
            severity: "warn",
            color: "color: orange;"
          }
        } else {
          return {
            icon: "pi pi-exclamation-triangle",
            tooltip: "Overdue",
            severity: "danger",
            color: "color: red;"
          }
        }
      }
    }
  }

  protected selectedSpecs: ModelSignal<Specification[]> = model([]);
  protected specificationTableConfig: TableConfig<Specification> = {
    columns: [
      {
        id: "code",
        key: 'code',
        name: "Code"
      },
      {
        id: "title",
        key: "title",
        name: "Title"
      },
      {
        id: "description",
        key: "description",
        name: "Description"
      },
      {
        id: "issued_at_date",
        name: "Issued At",
        transform: (item: Specification) => {
          if (item.issued_at_date) {
            return item.issued_at_date.toLocaleDateString();
          } else {
            return "";
          }
        }
      },
      {
        id: "revision",
        key: "revision",
        name: "Revision"
      },
      {
        id: "last_revision_date",
        name: "Date of Last Revision",
        transform: (item: Specification) => {
          if (item) {
            const date = item?.last_revision_date ?? item.issued_at_date;
            return date.toLocaleDateString();
          } else {
            return "";
          }
        }
      }
    ],
    actions: []
  }

  constructor(
    private projectService: ProjectService,
    private dialogService: DialogService,
    private alertService: AlertService,
    private discussionsService: DiscussionsService
  ) {
    effect(() => {
      this.projectId.set(this.params().id);
    });
    effect(() => {
      const project = this.project.value();

      if (project?.discussion_id) {
        this.discussionId.set(project.discussion_id);
      }
    });
    effect(() => {
      this.discussion.set(this.discussionResponse.value());
    });
  }

  protected onDiscussionChanged(discussion: Discussion): void {
    this.projectService
      .startDiscussion(this.projectId(), discussion.id)
      .pipe(
        take(1),
        tap(p => this.project.set(p)),
      )
      .subscribe({
        next: (result) => {
          this.discussionId.set(result.discussion_id);
          this.alertService.info("Successfully Written", "Message written to project successfully");
        },
        error: (error) => {
          this.alertService.error("Message Failed", "Failed to write message to the project");
        }
      });
  }

  public addSpecification(): void {
    const ref = this.dialogService
      .open(ProjectAddSpecificationDialogComponent, {
        header: "Add Specification to Project",
        modal: true,
        inputValues: {
          projectId: this.projectId()
        } as ProjectAddSpecificationDialogData,
      });

    ref.onClose
      .pipe(
        switchMap(
          (result: ProjectAddSpecificationRequest | boolean): Observable<Project> => {
            return result instanceof ProjectAddSpecificationRequest
              ? this.projectService.addSpecification(result)
              : (of(null) as Observable<Project>);
          },
        ),
        tap(async (result: Project) => {
          // TODO: refresh the details page / reload the updated content
          if (result) {
            this.project.set(result);
          }
        }),
        take(1),
      )
      .subscribe({
        next: (result) => {
          if (result) {
            this.alertService.info("Created", "Specification added successfully");
          } else {
            this.alertService.warn("Canceled", "Specification creation was canceled");
          }
        },
        error: (error) => {
          this.alertService.error("Failed", "Specification failed to be created");
        }
      });
  }

  public deleteSpec(): void {
    if (this.selectedSpecs().length === 0){
      this.alertService.warn("Canceled", "No Specifications were selected to be deleted");
      return;
    }

    for (const spec of this.selectedSpecs()) {
      this.projectService
        .deleteSpecification(spec)
        .pipe(
          tap(async (result: Project) => {
            // TODO: refresh the details page / reload the updated content
            if (result) {
              this.project.set(result);
              this.selectedSpecs.set([]);
            }
          }),
          take(1)
        )
        .subscribe({
          next: (result) => {
            if (result) {
              this.alertService.info("Deleted", "Specification deleted successfully");
            } else {
              this.alertService.warn("Canceled", "Specification deletion was canceled");
            }
          },
          error: (error) => {
            this.alertService.error("Failed", "Specification failed to be deleted");
          }
        });
    }
  }

  public addTask(): void {
    const ref = this.dialogService
      .open(ProjectAddTaskDialogComponent, {
        header: "Add Task to Project",
        modal: true,
        inputValues: {
          projectId: this.projectId()
        } as ProjectAddSpecificationDialogData,
      });

    ref.onClose
      .pipe(
        switchMap(
          (result: ProjectAddTaskRequest | boolean): Observable<Project> => {
            return result instanceof ProjectAddTaskRequest
              ? this.projectService.addTask(result)
              : (of(null) as Observable<Project>);
          },
        ),
        tap(async (result: Project) => {
          // TODO: refresh the details page / reload the updated content
          if (result) {
            this.project.set(result);
          }
        }),
        take(1),
      )
      .subscribe({
        next: (result) => {
          if (result) {
            this.alertService.info("Created", "Task added successfully");
          } else {
            this.alertService.warn("Canceled", "Task creation was canceled");
          }
        },
        error: (error) => {
          this.alertService.error("Failed", "Task failed to be created");
        }
      });
  }

  public deleteTasks(): void {
    if (this.selectedTasks().length === 0){
      this.alertService.warn("Canceled", "No Tasks were selected to be deleted");
      return;
    }

    for (const task of this.selectedTasks()) {
      this.projectService
        .deleteTask(task)
        .pipe(
          tap(async (result: Project) => {
            // TODO: refresh the details page / reload the updated content
            if (result) {
              this.project.set(result);
              this.selectedTasks.set([]);
            }
          }),
          take(1)
        )
        .subscribe({
          next: (result) => {
            if (result) {
              this.alertService.info("Deleted", "Task deleted successfully");
            } else {
              this.alertService.warn("Canceled", "Task deletion was canceled");
            }
          },
          error: (error) => {
            this.alertService.error("Failed", "Task failed to be deleted");
          }
        });
    }
  }

  public completeTask(task: Task): void {
    const ref = this.dialogService
      .open(ProjectTaskCompletionDialogComponent, {
        header: "Complete Task",
        modal: true,
        inputValues: {
          projectId: this.projectId(),
          task: task
        }
      });

    ref.onClose
      .pipe(
        switchMap((result: ProjectTaskCompletionRequest): Observable<Project> => {
          return result instanceof ProjectTaskCompletionRequest
            ? this.projectService.completeTask(result)
            : (of(null) as Observable<Project>)
        }),
        tap(async (result: Project) => {
          // TODO: refresh the details page / reload the updated content
          if (result) {
            this.project.set(result);
          }
        }),
        take(1),
      )
      .subscribe({
        next: (result) => {
          if (result) {
            this.alertService.info("Completed", "Task completed successfully");
          } else {
            this.alertService.warn("Canceled", "Task completion was canceled");
          }
        },
        error: (error) => {
          this.alertService.error("Failed", "Task completion failed");
        }
      })
  }
}
