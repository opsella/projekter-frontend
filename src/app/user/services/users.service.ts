import { Injectable } from "@angular/core";
import { httpResource } from "@angular/common/http";
import { User, UserPermission } from "../../models/user";
import { ApiResponse } from "../../models/api/api-response";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  public currentUser = httpResource<User>(
    () => `${environment.projekterApi}/users/me`,
    {
      parse: (result: ApiResponse<User>) => {
        return result.data;
      }
    }
  );

  public currentUserPermissions = httpResource<UserPermission[]>(
    () => `${environment.projekterApi}/users/${this.currentUser.value().user_id}/permissions`,
    {
      parse: (result: ApiResponse<{ user_permissions: UserPermission[] }>) => {
        return result.data.user_permissions;
      }
    }
  )

  constructor() { }
}

