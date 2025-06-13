import { Id } from "./id";

export class SpecificationId extends Id {
  constructor(value: string) {
    super(value);
  }

  protected override isValid(value: string): boolean {
    return super.isValid(value, "spec");
  }

  public static fromJSON(input: string): SpecificationId {
    return new SpecificationId(input);
  }
}
