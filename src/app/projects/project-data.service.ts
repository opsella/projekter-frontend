import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ProjectsApiService } from "../services/projects-api.service";
import { Project } from "../models/project";
import { ProjectFilters } from "../queries/project-queries";

@Injectable({
  providedIn: "root"
})
export class ProjectDataService {

  constructor(
    private projectsApiService: ProjectsApiService
  ) {
  }
  public projectsTableQuery(filters: ProjectFilters): Observable<Project[]> {
    return this.projectsApiService.queryProjects(filters);
  }
}
