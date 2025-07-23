import { TenantId } from "./ids/tenant-id";
import { UserId } from "./ids/user-id";
import { EmployeeId } from "./ids/employee-id";

export interface EmployeeInfoResponse {
  id: string;
  tenant_id: string;
  associated_user_id: string;
  external_employee_id?: string;
  is_active: boolean;
}

export class Employee {
  constructor(
    public id: EmployeeId,
    public tenantId: TenantId,
    public associatedUserId: UserId,
    public isActive: boolean,
    public externalEmployeeId?: string,
  ) {
  }

  public static fromResponse(response: EmployeeInfoResponse): Employee {
    return new Employee(
      EmployeeId.fromJSON(response.id),
      TenantId.fromJSON(response.tenant_id),
      UserId.fromJSON(response.associated_user_id),
      response.is_active,
      response.external_employee_id,
    );
  }
}
