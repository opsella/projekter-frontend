import { Injectable, Signal } from "@angular/core";
import { httpResource, HttpResourceRef } from "@angular/common/http";
import { CreateProjectRequest, Project, ProjectResponse, ProjectState } from "../../models/project";
import { ApiResponse, PaginatedApiResponse } from "../../models/api/api-response";

@Injectable()
export class ProjectService {
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
        parse: (result: ApiResponse<Project>) => {
          return result.data;
        }
      }
    )
  }

  public createProject: (project: CreateProjectRequest) => HttpResourceRef<Project> = (project) => {
    return httpResource<Project>(
      () => ({
        url    : "https://localhost:7209/project",
        method : "POST",
        data   : project
      }), {
        parse: (result: ApiResponse<Project>) => {
          return result.data;
        }
      }
    )
  }

  constructor() {}
}
