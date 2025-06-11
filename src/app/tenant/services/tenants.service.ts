import { Injectable } from "@angular/core";
import { httpResource } from "@angular/common/http";
import { Tenant } from "../../models/tenant";
import { ApiResponse } from "../../models/api/api-response";

@Injectable({
  providedIn: "root"
})
export class TenantsService {
  public tenant = httpResource<ApiResponse<Tenant>>(
    () => "https://localhost:7209/tenant/current", {});

  constructor() { }
}
