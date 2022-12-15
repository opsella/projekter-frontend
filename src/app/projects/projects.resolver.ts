import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot,} from "@angular/router";
import {Observable, tap} from "rxjs";
import {Project} from "./models/project";
import {ProjectDataService} from "./project-data.service";

@Injectable({
    providedIn: "root",
})
export class ProjectsResolver implements Resolve<Project[]> {
    constructor(
    private projectDataService: ProjectDataService,
    private route: Router
    ) {}

    public resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<Project[]> {
        return this.projectDataService.query().pipe(
            tap(async (projectData) => {
                if (projectData.length === 0) {
                    await this.route.navigate(["/projects/setup"]);
                }
            })
        );
    }
}
