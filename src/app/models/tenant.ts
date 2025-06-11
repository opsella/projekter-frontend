export class Tenant {
  constructor(
    public tenant_id: string,
    public code: string,
    public display_name: string,
    public available_project_statuses: ProjectStatus[],
  ) {}
}

export class ProjectStatus {
  constructor(
    public id: string,
    public category: string,
    public name: string
  ) {
  }
}
