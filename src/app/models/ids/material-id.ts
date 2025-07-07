import { Id } from "./id";

export class MaterialId extends Id {
  constructor(value: string) {
    super(value);
  }

  protected override isValid(value: string): boolean {
    return super.isValid(value, "material");
  }

  public static fromJSON(input: string): MaterialId {
    return new MaterialId(input);
  }
}
