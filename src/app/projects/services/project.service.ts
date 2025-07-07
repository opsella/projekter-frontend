import { Injectable, Signal } from "@angular/core";
import {
  HttpClient,
  httpResource,
  HttpResourceRef,
} from "@angular/common/http";
import {
  CreateProjectRequest,
  Project,
  ProjectAddSpecificationRequest,
  ProjectResponse,
  ProjectState,
} from "../../models/project";
import {
  ApiResponse,
  PaginatedApiResponse,
} from "../../models/api/api-response";
import { map, Observable } from "rxjs";
import { environment } from "../../../environments/environment";

@Injectable()
export class ProjectService {
  constructor(private http: HttpClient) {}

  public projects: (
    state?: Signal<ProjectState>,
  ) => HttpResourceRef<Project[]> = (state) => {
      return httpResource<Project[]>(
        () => ({
          url: `${environment.projekterApi}/project`,
          params: {
            state: state(),
          },
        }),
        {
          parse: (result: PaginatedApiResponse<ProjectResponse>) => {
            return result.data?.map((project) => {
              return Project.fromResponse(project);
            });
          },
        },
      );
    };

  public project: (projectId: Signal<string>) => HttpResourceRef<Project> = (
    projectId,
  ) => {
    return httpResource<Project>(
      () => `${environment.projekterApi}/project/${projectId()}`,
      {
        parse: (result: ApiResponse<ProjectResponse>) => {
          return Project.fromResponse(result.data);
        },
      },
    );
  };

  public createProject(project: CreateProjectRequest): Observable<Project> {
    return this.http
      .post<
        ApiResponse<ProjectResponse>
      >(`${environment.projekterApi}/project`, project, {})
      .pipe(
        map((response) => {
          return Project.fromResponse(response.data);
        }),
      );
  }

  public addSpecification(
    spec: ProjectAddSpecificationRequest,
  ): Observable<Project> {
    return this.http
      .post<
        ApiResponse<ProjectResponse>
      >(`${environment.projekterApi}/project/${spec.project_id.toString()}/spec`, spec, {})
      .pipe(
        map((response) => {
          return Project.fromResponse(response.data);
        }),
      );
  }
}
