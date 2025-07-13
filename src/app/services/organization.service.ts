import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {ProjectStatus, Tenant, TenantInfoResponse} from "../models/tenant";
import { map, Observable, shareReplay } from "rxjs";
import { ApiResponse } from "../models/api/api-response";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class OrganizationService {
  private projectStatus$: Observable<ProjectStatus[]>;

  constructor(
    private httpClient: HttpClient,
  ) {}

  public getProjectStatuses(): Observable<ProjectStatus[]> {
    if (!this.projectStatus$) {
      this.projectStatus$ = this.httpClient
        .get<ApiResponse<TenantInfoResponse>>(`${environment.projekterApi}/tenant/current`)
        .pipe(
          map((result) => Tenant.fromRequest(result.data)),
          map((result) => result.available_project_statuses),
          shareReplay({ bufferSize: 1, refCount: true }),
        );
    }

    return this.projectStatus$;
  }
}
