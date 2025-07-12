import {Component, effect, inject, signal} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProjectService } from "../services/project.service";
import { HttpResourceRef } from "@angular/common/http";
import {Project, ProjectAddSpecificationRequest, ProjectAddTaskRequest} from "../../models/project";
import { toSignal } from "@angular/core/rxjs-interop";
import {
  ProjectAddSpecificationDialogComponent,
  ProjectAddSpecificationDialogData,
} from "../project-add-specification-dialog/project-add-specification-dialog.component";
import { Observable, of, switchMap, take, tap } from "rxjs";
import { ContentSectionComponent } from "../../shared/content-section/content-section.component";
import { DatePipe, NgOptimizedImage } from "@angular/common";
import { SimpleTableComponent } from "../../shared/simple-table/simple-table.component";
import {DialogService, DynamicDialogModule} from "primeng/dynamicdialog";
import {TableModule} from "primeng/table";
import {Button} from "primeng/button";
import {Breadcrumb} from "primeng/breadcrumb";
import {MenuItem} from "primeng/api";
import {AlertService} from "../../core/alert.service";
import {ProjectAddTaskDialogComponent} from "../project-add-task-dialog/project-add-task-dialog.component";
import {Toolbar} from "primeng/toolbar";

@Component({
  selector: "app-project-details",
  templateUrl: "./project-details.component.html",
  styleUrl: "./project-details.component.scss",
  imports: [
    ContentSectionComponent,
    NgOptimizedImage,
    DatePipe,
    SimpleTableComponent,
    TableModule,
    Button,
    Breadcrumb,
    Toolbar,
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

  protected breadcrumbItems: MenuItem[] = [
    {
      label: 'projects',
      routerLink: '/project'
    }
  ];
  protected home: MenuItem = {
    icon: 'pi pi-home',
    routerLink: '/project'
  };

  protected project: HttpResourceRef<Project> = this.projectService.project(this.projectId);

  constructor(
    private projectService: ProjectService,
    private dialogService: DialogService,
    private alertService: AlertService,
  ) {
    effect(() => {
      this.projectId.set(this.params().id);
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
}
