import { Injectable } from "@angular/core";
import { httpResource } from "@angular/common/http";
import { User, UserPermission } from "../../models/user";
import { ApiResponse } from "../../models/api/api-response";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  public currentUser = httpResource<User>(
    () => "https://localhost:7209/users/me",
    {
      parse: (result: ApiResponse<User>) => {
        return result.data;
      }
    }
  );

  public currentUserPermissions = httpResource<UserPermission[]>(
    () => `https://localhost:7209/users/${this.currentUser.value().user_id}/permissions`,
    {
      parse: (result: ApiResponse<{ user_permissions: UserPermission[] }>) => {
        return result.data.user_permissions;
      }
    }
  )

  constructor() { }
}

