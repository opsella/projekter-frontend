import { Id } from "./id";

export class ProjectId extends Id {
  constructor(value: string) {
    super(value);
  }

  protected override isValid(value: string): boolean {
    return super.isValid(value, "project");
  }

  public static fromJSON(input: string): ProjectId {
    return new ProjectId(input);
  }
}
