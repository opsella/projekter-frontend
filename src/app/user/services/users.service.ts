import { Injectable } from "@angular/core";
import { HttpClient, httpResource } from "@angular/common/http";
import { User, UserPermission } from "../../models/user";
import { ApiResponse } from "../../models/api/api-response";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  constructor(
    private http: HttpClient
  ) { }

  public currentUser = httpResource<User>(
    () => `${environment.projekterApi}/users/me`,
    {
      parse: (result: ApiResponse<User>) => {
        return result.data;
      }
    }
  );

  public currentUserPermissions = httpResource<UserPermission[]>(
    () => `${environment.projekterApi}/users/${this.currentUser.value().id}/permissions`,
    {
      parse: (result: ApiResponse<{ user_permissions: UserPermission[] }>) => {
        return result.data.user_permissions;
      }
    }
  );
}

