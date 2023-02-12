import { ProjectResponse } from "../services/projects-api.service";

export class Project {
  constructor(
    public id: string,
    public code: string,
    public name: string,
    public description: string
  ) {
  }

  public static fromProjectResponse(response: ProjectResponse) {
    return new Project(response.id, response.code, response.name, response.description);
  }

  public static isProject(value: unknown): value is Project {
    return value instanceof Project;
  }
}
