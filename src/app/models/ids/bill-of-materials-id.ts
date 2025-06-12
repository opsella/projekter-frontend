import { Id } from "./id";

export class BillOfMaterialsId extends Id {
  constructor(value: string) {
    super(value);
  }

  protected override isValid(value: string): boolean {
    return super.isValid(value, "bom");
  }

  public static fromJSON(input: string): BillOfMaterialsId {
    return new BillOfMaterialsId(input);
  }
}
