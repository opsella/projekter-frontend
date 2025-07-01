import { Injectable } from "@angular/core";
import { httpResource } from "@angular/common/http";
import { Tenant } from "../../models/tenant";
import { ApiResponse } from "../../models/api/api-response";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class TenantsService {
  public tenant = httpResource<Tenant>(
    () => `${environment.projekterApi}/tenant/current`, {
      parse: (result: ApiResponse<Tenant>) => {
        return result.data;
      },
    });

  constructor() { }
}
