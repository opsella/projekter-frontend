import { UserId } from "./ids/user-id";
import { TenantId } from "./ids/tenant-id";

export interface UserResponse {
  id: string;
  tenant_id: string;
  username: string;
  nickname: string;
  first_name: string;
  last_name: string;
  email: string;
  picture: string;
  email_verified?: boolean;
}

export class User {
  constructor(
    public id: UserId,
    public tenant_id: TenantId,
    public username: string,
    public nickname: string,
    public first_name: string,
    public last_name: string,
    public email: string,
    public picture: string,
    public email_verified?: boolean,
  ) {
  }

  public static fromResponse(response: UserResponse): User {
    return new User(
      UserId.fromJSON(response.id),
      TenantId.fromJSON(response.tenant_id),
      response.username,
      response.nickname,
      response.first_name,
      response.last_name,
      response.email,
      response.picture,
      response.email_verified
    );
  }
}

export class UserPermission {
  constructor(
    public permission_name: string,
    public description: string
  ) {
  }
}
