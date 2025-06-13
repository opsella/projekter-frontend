import { Id } from "./id";

export class TaskId extends Id {
  constructor(value: string) {
    super(value);
  }

  protected override isValid(value: string): boolean {
    return super.isValid(value, "task");
  }

  public static fromJSON(input: string): TaskId {
    return new TaskId(input);
  }
}
