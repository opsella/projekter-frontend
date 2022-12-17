import { Injectable } from "@angular/core";
import { Resolve, Router } from "@angular/router";
import { Observable, tap } from "rxjs";
import { Project } from "./models/project";
import { ProjectDataService } from "./project-data.service";

@Injectable({
  providedIn: "root",
})
export class ProjectsResolver implements Resolve<Project[]> {
  constructor(
    private projectDataService: ProjectDataService,
    private router: Router
  ) { }

  public resolve(): Observable<Project[]> {
    return this.projectDataService.query().pipe(
      tap(async (projectData) => {
        if (projectData.length === 0) {
          await this.router.navigate([
            "/projects/setup"
          ]);
        }
      })
    );
  }
}
