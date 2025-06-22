import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ProjectStatus, Tenant } from "../models/tenant";
import { map, Observable, shareReplay } from "rxjs";
import { ApiResponse } from "../models/api/api-response";

@Injectable({
  providedIn: "root",
})
export class OrganizationService {
  private projectStatus$: Observable<ProjectStatus[]>;

  constructor(private httpClient: HttpClient) {}

  public getProjectStatuses(): Observable<ProjectStatus[]> {
    if (!this.projectStatus$) {
      this.projectStatus$ = this.httpClient
        .get<ApiResponse<Tenant>>("https://localhost:7209/tenant/current")
        .pipe(
          map(
            (result: ApiResponse<Tenant>): ProjectStatus[] =>
              result.data.available_project_statuses,
          ),
          shareReplay({ bufferSize: 1, refCount: true }),
        );
    }

    return this.projectStatus$;
  }
}
