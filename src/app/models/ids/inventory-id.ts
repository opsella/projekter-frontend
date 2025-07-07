import { Id } from "./id";

export class InventoryId extends Id {
  constructor(value: string) {
    super(value);
  }

  protected override isValid(value: string): boolean {
    return super.isValid(value, "inventory");
  }

  public static fromJSON(input: string): InventoryId {
    return new InventoryId(input);
  }
}
