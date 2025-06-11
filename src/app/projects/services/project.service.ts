import { Injectable, Signal } from "@angular/core";
import { HttpClient, httpResource, HttpResourceRef } from "@angular/common/http";
import { Observable, tap } from "rxjs";
import { Project } from "../../models/project";
import { ApiResponse, PaginatedApiResponse } from "../../models/api/api-response";

@Injectable()
export class ProjectService {
  public projects = httpResource<Project[]>(
    () => "https://localhost:7209/project?state=Draft",
    {
      parse: (result: PaginatedApiResponse<Project>)=> {
        return result.data;
      }
    }
  );

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

  constructor(private http: HttpClient) {}

  public getProjects<T>(): Observable<T> {
    return this.http
      .get<T>("https://localhost:7209/project")
      .pipe(tap((data) => console.log("DATA YOLO ", data)));
  }

  public getProjectById<T>(id: number): Observable<T> {
    return this.http
      .get<T>(`https://localhost:7209/project/${id}`)
      .pipe(tap((data) => console.log("DATA YOLO ", data)));
  }

  public createProject<T>(body: Project): Observable<T> {
    return this.http
      .post<T>("https://localhost:7209/project", body)
      .pipe(tap((data) => console.log("DATA YOLO ", data)));
  }
}
