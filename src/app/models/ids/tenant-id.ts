import { Id } from "./id";

export class TenantId extends Id {
  constructor(value: string) {
    super(value);
  }

  protected override isValid(value: string): boolean {
    return super.isValid(value, "tenant");
  }

  public static fromJSON(input: string): TenantId {
    return new TenantId(input);
  }
}
