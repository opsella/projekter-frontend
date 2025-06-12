import { Injectable, Signal } from '@angular/core';
import { HttpClient, httpResource, HttpResourceRef } from '@angular/common/http';
import { CreateProjectRequest, Project, ProjectResponse, ProjectState } from '../../models/project';
import { ApiResponse, PaginatedApiResponse } from '../../models/api/api-response';
import { map, Observable } from 'rxjs';

@Injectable()
export class ProjectService {

  constructor(private http: HttpClient) {
  }

  public projects: (state?: Signal<ProjectState>) => HttpResourceRef<Project[]> = (state) => {
    return httpResource<Project[]>(
      () => ({
        url    : "https://localhost:7209/project",
        params : {
          "state": state()
        }
      }),
      {
        parse: (result: PaginatedApiResponse<ProjectResponse>)=> {
          return result.data
            .map(project => {
              return Project.fromResponse(project);
            });
        }
      }
    )
  }

  public project: (projectId: Signal<string>) => HttpResourceRef<Project> = (projectId) => {
    return httpResource<Project>(
      () => `https://localhost:7209/project/${projectId()}`,
      {
        parse: (result: ApiResponse<ProjectResponse>) => {
          return Project.fromResponse(result.data);
        }
      }
    )
  }

  public createProject(project: CreateProjectRequest): Observable<Project> {
    return this.http.post<ApiResponse<ProjectResponse>>("https://localhost:7209/project", project, {})
      .pipe(
        map(response => {
          console.log("received response", response)
          return Project.fromResponse(response.data);
        })
      )
  }
}
