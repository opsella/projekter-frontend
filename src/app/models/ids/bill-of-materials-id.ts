export class BillOfMaterialsId {
  private _value: string;

  constructor(value: string) {
    if (!this.isValid(value)) {
      throw new Error(`Invalid BillOfMaterialsId '${value}'`);
    }

    this._value = value;
  }

  public get value(): string {
    return this._value;
  }

  private isValid(value: string): boolean {
    return /^bom_[0-9A-Fa-f]{8}-?[0-9A-Fa-f]{4}-?4[0-9A-Fa-f]{3}-?[89ABab][0-9A-Fa-f]{3}-?[0-9A-Fa-f]{12}$/.test(value);
  }

  /**
   * This is used by JSON.stringify() to convert to a status
   */
  private toJSON() {
    return this.value;
  }

  public static fromJSON(input: string): BillOfMaterialsId {
    return new BillOfMaterialsId(input);
  }
}
