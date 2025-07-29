import { Injectable, Signal } from "@angular/core";
import {
  HttpClient,
  httpResource,
  HttpResourceRef,
} from "@angular/common/http";
import {
  CreateProjectRequest,
  Project,
  ProjectAddSpecificationRequest, ProjectAddTaskRequest,
  ProjectResponse,
  ProjectState, ProjectTaskCompletionRequest, Specification, Task,
} from "../../models/project";
import {
  ApiResponse,
  PaginatedApiResponse,
} from "../../models/api/api-response";
import { map, Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import {DiscussionId} from "../../models/ids/discussion-id";
import {ProjectId} from "../../models/ids/project-id";

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
      .post<ApiResponse<ProjectResponse>>(`${environment.projekterApi}/project`, project, {})
      .pipe(
        map((response) => {
          return Project.fromResponse(response.data);
        }),
      );
  }

  public startDiscussion(
    projectId: ProjectId,
    discussionId: DiscussionId
  ): Observable<Project> {
    return this.http
      .patch<ApiResponse<ProjectResponse>>(`${environment.projekterApi}/project/${projectId}/discussion`, {
        discussion_id: discussionId.toString()
      })
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

  public deleteSpecification(
    spec: Specification
  ): Observable<Project> {
    return this.http
      .delete<ApiResponse<ProjectResponse>>(`${environment.projekterApi}/project/${spec.project_id.toString()}/spec/${spec.id.toString()}`)
      .pipe(
        map((response) => {
          return Project.fromResponse(response.data);
        })
      );
  }

  public addTask(
    task: ProjectAddTaskRequest
  ): Observable<Project> {
    return this.http
      .post<ApiResponse<ProjectResponse>>(`${environment.projekterApi}/project/${task.project_id.toString()}/task`, task, {})
      .pipe(
        map((response) => {
          return Project.fromResponse(response.data);
        })
      );
  }

  public deleteTask(
    task: Task
  ): Observable<Project> {
    return this.http
      .delete<ApiResponse<ProjectResponse>>(`${environment.projekterApi}/project/${task.assigned_project_id.toString()}/task/${task.id.toString()}`)
      .pipe(
        map((response) => {
          return Project.fromResponse(response.data);
        })
      );
  }

  public completeTask(
    task: ProjectTaskCompletionRequest
  ): Observable<Project> {
    return this.http
      .put<ApiResponse<ProjectResponse>>(`${environment.projekterApi}/project/${task.project_id.toString()}/task/${task.task_id.toString()}/complete`, task)
      .pipe(
        map((response) => {
          return Project.fromResponse(response.data);
        })
      );
  }
}
