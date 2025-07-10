import { Component, effect, inject, signal } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ProjectService } from "../services/project.service";
import { HttpResourceRef } from "@angular/common/http";
import { Project, ProjectAddSpecificationRequest } from "../../models/project";
import { toSignal } from "@angular/core/rxjs-interop";
import { MatDialog } from "@angular/material/dialog";
import {
  ProjectAddSpecificationDialogComponent,
  ProjectAddSpecificationDialogData,
} from "../project-add-specification-dialog/project-add-specification-dialog.component";
import { Observable, of, switchMap, take, tap } from "rxjs";
import { ContentSectionComponent } from "../../shared/content-section/content-section.component";
import { DatePipe, NgOptimizedImage } from "@angular/common";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable,
} from "@angular/material/table";
import { MatButton } from "@angular/material/button";
import { SimpleTableComponent } from "../../shared/simple-table/simple-table.component";

@Component({
  selector: "app-project-details",
  templateUrl: "./project-details.component.html",
  styleUrl: "./project-details.component.scss",
  imports: [
    ContentSectionComponent,
    NgOptimizedImage,
    MatTable,
    MatColumnDef,
    MatHeaderCellDef,
    MatHeaderCell,
    MatCellDef,
    MatCell,
    MatHeaderRowDef,
    MatHeaderRow,
    MatRowDef,
    MatRow,
    MatButton,
    DatePipe,
    SimpleTableComponent,
  ],
  providers: [ProjectService],
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
    private dialog: MatDialog,
  ) {
    effect(() => {
      this.projectId.set(this.params().id);
    });
  }

  public addSpecification(): void {
    const ref = this.dialog.open(ProjectAddSpecificationDialogComponent, {
      data: {
        projectId: this.projectId(),
      } as ProjectAddSpecificationDialogData,
    });

    ref
      .afterClosed()
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
