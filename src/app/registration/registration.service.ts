import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { ApiResponse } from "../models/api/api-response";
import { environment } from "../../environments/environment";
import { User, UserResponse } from "../models/user";
import { HttpClient } from "@angular/common/http";
import { Tenant, TenantInfoResponse } from "../models/tenant";

export interface UserRegistrationRequest {
  firstname: string;
  lastname: string;
  email: string;
  username: string;
  profile_picture: string;
  phone_number?: string;
}

@Injectable({
  providedIn: "root"
})
export class RegistrationService {
  constructor(
    public http: HttpClient,
  ) { }

  public registerUser(request: UserRegistrationRequest): Observable<User> {
    return this.http
      .post<ApiResponse<UserResponse>>(`${environment.projekterApi}/users/register`, request, {})
      .pipe(
        map((response) => {
          return User.fromResponse(response.data);
        })
      );
  }

  public registerTenant(): Observable<Tenant> {
    return this.http
      .post<ApiResponse<TenantInfoResponse>>(`${environment.projekterApi}/tenants/register`, {}, {})
      .pipe(
        map(res => Tenant.fromRequest(res.data))
      );
  }
}
