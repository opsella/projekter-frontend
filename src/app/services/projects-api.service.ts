import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { getAllProjects, ProjectFilters } from "../queries/project-queries";
import { Apollo } from "apollo-angular";
import { Project } from "../models/project";

export interface ProjectResponse {
  id: string;
  name: string;
  code: string;
  description: string;
}

@Injectable({
  providedIn: "root"
})
export class ProjectsApiService {
  constructor(private apollo: Apollo) { }

  public queryProjects(filters: ProjectFilters): Observable<Project[]> {
    return getAllProjects(this.apollo, filters);
  }
}
