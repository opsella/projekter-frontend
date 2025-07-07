import { Id } from "./id";

export class InventoryItemId extends Id {
  constructor(value: string) {
    super(value);
  }

  protected override isValid(value: string): boolean {
    return super.isValid(value, "invitem");
  }

  public static fromJSON(input: string): InventoryItemId {
    return new InventoryItemId(input);
  }
}

