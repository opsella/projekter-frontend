import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot, } from "@angular/router";
import { Observable, tap } from "rxjs";
import {ProjectData, ProjectsDataService} from "../services/projects-data.service";

@Injectable({
    providedIn: "root",
})
export class ProjectsResolver implements Resolve<ProjectData[]> {
    constructor(
    private projectsData: ProjectsDataService,
    private route: Router
    ) {}

    public resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<ProjectData[]> {
        return this.projectsData.getData(false).pipe(
            tap(async (projectData) => {
                if (projectData.length === 0) {
                    await this.route.navigate(["/projects/setup"]);
                }
            })
        );
    }
}
