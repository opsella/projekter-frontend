import { Id } from "./id";

export class EmployeeId extends Id {
  constructor(value: string) {
    super(value);
  }

  protected override isValid(value: string): boolean {
    return super.isValid(value, "employee");
  }

  public static fromJSON(input: string): EmployeeId {
    return new EmployeeId(input);
  }
}

