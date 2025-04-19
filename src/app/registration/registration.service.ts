import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { RequestService } from '../core/request.service';
import { JsonObject, JsonProperty } from 'typescript-json-serializer';
import { ApiResponse } from '../models/api/api-response';

@JsonObject()
export class UserInfoResponse {
  constructor(
    @JsonProperty({ name: "user_id" })
    public id: string,
    @JsonProperty({ name: "tenant_id" })
    public tenantId: string,
    @JsonProperty({ name: "username" })
    public username: string,
    @JsonProperty({ name: "nickname" })
    public nickname: string,
    @JsonProperty({ name: "first_name" })
    public firstname: string,
    @JsonProperty({ name: "last_name" })
    public lastname: string,
    @JsonProperty({ name: "email" })
    public email: string,
    @JsonProperty({ name: "email_verified" })
    public emailVerified: boolean | null,
    @JsonProperty({ name: "picture" })
    public picture: string,
  ) {
  }
}

@JsonObject()
export class TenantInfoResponse {
  constructor(
    @JsonProperty({ name: "tenant_id" })
    public id: string,
    @JsonProperty({ name: "code" })
    public code: string,
    @JsonProperty({ name: "display_name" })
    public displayName: string,
  ) {
  }
}

@Injectable({
  providedIn: "root"
})
export class RegistrationService {
  constructor(
    public api: RequestService
  ) { }

  public registerUser(): Observable<UserInfoResponse> {
    return this.api.post<ApiResponse<UserInfoResponse>>("/users/register", {})
      .pipe(
        map(res => res.data)
      );
  }

  public registerTenant(): Observable<TenantInfoResponse> {
    return this.api.post<ApiResponse<TenantInfoResponse>>("/tenants/register", {})
      .pipe(
        map(res => res.data)
      );
  }
}
