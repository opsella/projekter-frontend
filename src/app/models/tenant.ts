import { TenantId } from "./ids/tenant-id";
import { ProjectStatusId } from "./ids/project-status-id";

export interface TenantInfoResponse {
  id: string;
  code: string;
  displayName: string;
  available_project_statuses: ProjectStatusResponse[];
}

export interface ProjectStatusResponse {
  id: string;
  category: string;
  name: string;
}

export class Tenant {
  constructor(
    public id: TenantId,
    public code: string,
    public display_name: string,
    public available_project_statuses: ProjectStatus[],
  ) {}

  public static fromRequest(response: TenantInfoResponse): Tenant {
    return new Tenant(
      TenantId.fromJSON(response.id),
      response.code,
      response.displayName,
      response.available_project_statuses.map(ProjectStatus.fromRequest)
    );
  }
}

export class ProjectStatus {
  constructor(
    public id: ProjectStatusId,
    public category: string,
    public name: string
  ) {
  }

  public static fromRequest(response: ProjectStatusResponse): ProjectStatus {
    return new ProjectStatus(
      ProjectStatusId.fromJSON(response.id),
      response.category,
      response.name
    );
  }
}
