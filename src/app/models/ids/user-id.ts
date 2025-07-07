import { Id } from "./id";

export class UserId extends Id {
  constructor(value: string) {
    super(value);
  }

  protected override isValid(value: string): boolean {
    return super.isValid(value, "user");
  }

  public static fromJSON(input: string): UserId {
    return new UserId(input);
  }
}
