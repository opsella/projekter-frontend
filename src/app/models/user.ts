import { UserId } from "./ids/user-id";
import { TenantId } from "./ids/tenant-id";
import {Employee, EmployeeInfoResponse} from "./employee";

export interface UserResponse {
  id: string;
  tenant_id: string;
  username?: string;
  nickname?: string;
  first_name?: string;
  last_name?: string;
  email: string;
  email_verified?: boolean;
  picture: string;
  employee: EmployeeInfoResponse;
  phone_number?: string;
}


export class User {
  constructor(
    public id: UserId,
    public tenant_id: TenantId,
    public email: string,
    public picture: string,
    public employee: Employee,
    public first_name?: string,
    public last_name?: string,
    public username?: string,
    public nickname?: string,
    public email_verified?: boolean,
    public phoneNumber?: string,
  ) {
  }

  public static fromResponse(response: UserResponse): User {
    return new User(
      UserId.fromJSON(response.id),
      TenantId.fromJSON(response.tenant_id),
      response.email,
      response.picture,
      Employee.fromResponse(response.employee),
      response.first_name,
      response.last_name,
      response.username,
      response.nickname,
      response.email_verified,
      response.phone_number,
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
