import { TenantId } from "./ids/tenant-id";
import { UserId } from "./ids/user-id";
import { EmployeeId } from "./ids/employee-id";

export interface EmployeeResponse {
  employee_id: string;
  tenant_id: string;
  associated_user_id: string;
  fullname: string;
  is_active: boolean;
}

export class Employee {
  constructor(
    public id: EmployeeId,
    public tenant_id: TenantId,
    public associated_user_id: UserId,
    public fullname: string,
    public is_active: boolean,
  ) {
  }

  public static fromResponse(response: EmployeeResponse): Employee {
    return new Employee(
      EmployeeId.fromJSON(response.employee_id),
      TenantId.fromJSON(response.tenant_id),
      UserId.fromJSON(response.associated_user_id),
      response.fullname,
      response.is_active,
    );
  }
}
