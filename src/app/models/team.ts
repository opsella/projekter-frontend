import {Employee, EmployeeInfoResponse} from "./employee";
import {TeamId} from "./ids/team-id";
import {TenantId} from "./ids/tenant-id";

export interface TeamInfoResponse {
  id: string;
  tenant_id: string;
  name: string;
  description: string;
  team_lead: EmployeeInfoResponse;
  team_members: EmployeeInfoResponse[];
}

export class Team {
  constructor(
    public id: TeamId,
    public tenantId: TenantId,
    public name: string,
    public description: string,
    public teamLead: Employee,
    public teamMembers: Employee[]
  ) {
  }

  public static fromRequest(response: TeamInfoResponse): Team {
    return new Team(
      TeamId.fromJSON(response.id),
      TenantId.fromJSON(response.tenant_id),
      response.name,
      response.description,
      Employee.fromResponse(response.team_lead),
      response.team_members.map(x => Employee.fromResponse(x)),
    );
  }
}
