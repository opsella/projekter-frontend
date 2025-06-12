import { Id } from "./id";

export class ProjectStatusId extends Id {
  constructor(value: string) {
    super(value);
  }

  protected override isValid(value: string): boolean {
    return super.isValid(value, "status");
  }

  public static fromJSON(input: string): ProjectStatusId {
    return new ProjectStatusId(input);
  }
}
