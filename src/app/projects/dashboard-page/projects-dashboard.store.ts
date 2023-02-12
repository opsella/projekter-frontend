import { Injectable } from "@angular/core";
import { ComponentStore } from "@ngrx/component-store";
import { TableFilterActions } from "../../shared/expansion-table/table-filters/table-filter-actions";
import { catchError, EMPTY, Observable, switchMap, tap } from "rxjs";
import { ProjectDataService } from "../project-data.service";
import { ExpansionTableData } from "../../shared/expansion-table/expandable-data";
import { ProjectTableData } from "./dashboard-page.component";
import { Project } from "../../models/project";
import { ProjectFilters } from "../../queries/project-queries";
import { ProjectTableContentComponent } from "../project-table-content/project-table-content.component";

export interface ProjectsDashboardState {
  projects: Project[];
  tableFilters: TableFilterActions[];
  status: "pending" | "loading" | "succeeded" | "failed";
}

@Injectable()
export class ProjectsDashboardStore extends ComponentStore<ProjectsDashboardState> {
  constructor(
    private projectDataService: ProjectDataService
  ) {
    super({
      projects     : [] as Project[],
      tableFilters : [
        {
          title  : "All",
          action : () => this.getProjectsTableData({ filters: {} })
        },
        {
          title  : "Active",
          // should have these send a filter to find all "active"
          action : () => this.getProjectsTableData({ filters: {} })
        },
        {
          title  : "Complete",
          // should have these send a filter to find all "inactive"
          action : () => this.getProjectsTableData({ filters: {} })
        },
      ],
      status: "pending"
    });
  }

  private readonly projects$ = this.select(state => state.projects);

  private readonly setProjectsTableData = this.updater((state, value: Project[]) => ({
    ...state,
    projects: [ ...value ]
  }));

  private readonly tableFilters$ = this.select(
    ({ tableFilters }) => tableFilters
  );
  private readonly hasData$ = this.select(
    ({ status }) => status === "succeeded"
  );


  public readonly getProjectsTableData = this.effect<{
    filters: ProjectFilters;
  }>((
    filters$: Observable<{filters: ProjectFilters }>
  ) => {
    return filters$.pipe(
      switchMap(
        (filters) => this.projectDataService.projectsTableQuery(filters.filters).pipe(
          tap({
            next: (data) => {
              this.setProjectsTableData(data);
              this.setStatusSucceeded();
            },
            error: () => EMPTY
          }),
          catchError(() => EMPTY)
        )
      )
    );
  });

  private selectTableData(): Observable<ExpansionTableData<ProjectTableData>[]> {
    return this.select(
      this.projects$,
      (projects): ExpansionTableData<ProjectTableData>[] => {
        return projects.map(data => {
          return {
            data: {
              id          : data.id,
              code        : data.code,
              name        : data.name,
              description : data?.description
            },
            expansionComponent: ProjectTableContentComponent,
          } as ExpansionTableData<ProjectTableData>;
        });
      }
    );
  }

  private readonly setStatusSucceeded = this.updater((state) => ({
    ...state,
    status: "succeeded"
  }));

  public readonly vm$ = this.select({
    projects$     : this.selectTableData(),
    hasData$      : this.hasData$,
    tableFilters$ : this.tableFilters$
  });
}
