import {Component, effect, inject, model, ModelSignal, signal} from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ProjectService } from "../services/project.service";
import { HttpResourceRef } from "@angular/common/http";
import { Project, ProjectAddSpecificationRequest } from "../../models/project";
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

  protected project: HttpResourceRef<Project> = this.projectService.project(
    this.projectId,
  );

  constructor(
    private router: Router,
    private projectService: ProjectService,
    private dialogService: DialogService
  ) {
    effect(() => {
      this.projectId.set(this.params().id);
    });
  }

  public addSpecification(): void {
    const ref = this.dialogService
      .open(ProjectAddSpecificationDialogComponent, {
        modal: true,
        data: {
          projectId: this.projectId()
        } as ProjectAddSpecificationDialogData,
      });

    ref.onClose
      .pipe(
        switchMap(
          (
            result: ProjectAddSpecificationRequest | null | boolean,
          ): Observable<Project> => {
            const response: Observable<Project> = of(
              null,
            ) as Observable<Project>;

            if (result instanceof ProjectAddSpecificationRequest) {
              return this.projectService.addSpecification(result);
            }

            return response;
          },
        ),
        tap(async (result: Project) => {
          // TODO: refresh the details page / reload the updated content
          this.project.set(result);
        }),
        take(1),
      )
      .subscribe();
  }

  public async backToProjects(): Promise<void> {
    await this.router.navigate(["projects/list"]);
  }
}
