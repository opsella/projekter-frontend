import { Injectable } from "@angular/core";
import {HttpClient, httpResource, HttpResourceRef} from "@angular/common/http";
import {User, UserPermission, UserResponse} from "../../models/user";
import {ApiResponse, PaginatedApiResponse} from "../../models/api/api-response";
import { environment } from "../../../environments/environment";
import {map, Observable} from "rxjs";
import {UserId} from "../../models/ids/user-id";

export class UserPersonalInformationUpdateRequest {
  constructor(
    public id: UserId,
    public given_name?: string,
    public family_name?: string,
    public nickname?: string,
    public phone_number?: string,
  ) {
  }
}

@Injectable({
  providedIn: "root"
})
export class UsersService {
  constructor(
    private http: HttpClient
  ) { }

  public getUsers(): HttpResourceRef<User[]> {
    return httpResource<User[]>(
      () => `${environment.projekterApi}/users`,
      {
        parse: (result: PaginatedApiResponse<UserResponse>) => {
          return result.data.map(x => User.fromResponse(x));
        }
      }
    )
  }

  public getCurrentUser(): HttpResourceRef<User> {
    return httpResource<User>(
      () => `${environment.projekterApi}/users/me`,
      {
        parse: (result: ApiResponse<UserResponse>) => {
          const value = User.fromResponse(result.data);
          console.log(value);
          return value;
        }
      }
    );
  }

  public getUserPermissions(userId: UserId): HttpResourceRef<UserPermission[]> {
    return httpResource<UserPermission[]>(
      () => `${environment.projekterApi}/users/${userId}/permissions`,
      {
        parse: (result: ApiResponse<{ user_permissions: UserPermission[] }>) => {
          return result.data.user_permissions;
        }
      }
    )
  }

  public updatePersonalInformation(request: UserPersonalInformationUpdateRequest): Observable<User> {
    return this.http
      .patch<ApiResponse<UserResponse>>(`${environment.projekterApi}/users/${request.id}/personal`, request)
      .pipe(
        map((response) => {
          return User.fromResponse(response.data);
        })
      );
  }
}

