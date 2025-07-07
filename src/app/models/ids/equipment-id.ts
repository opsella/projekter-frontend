import { Id } from "./id";

export class EquipmentId extends Id {
  constructor(value: string) {
    super(value);
  }

  protected override isValid(value: string): boolean {
    return super.isValid(value, "equipment");
  }

  public static fromJSON(input: string): EquipmentId {
    return new EquipmentId(input);
  }
}

