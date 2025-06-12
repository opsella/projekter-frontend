export abstract class Id {
  private readonly _value: string;

  protected constructor(value: string) {
    if (!this.isValid(value)) {
      throw new Error(`Invalid id '${value}'`);
    }

    this._value = value;
  }

  public get value(): string {
    return this._value;
  }

  protected isValid(value: string, prefix?: string): boolean {
    return new RegExp(
      `^${prefix}_[0-9A-Fa-f]{8}-?[0-9A-Fa-f]{4}-?4[0-9A-Fa-f]{3}-?[89ABab][0-9A-Fa-f]{3}-?[0-9A-Fa-f]{12}$`,
    ).test(value);
  }

  /**
   * This is used by JSON.stringify() to convert to a status
   */
  private toJSON() {
    return this.value;
  }

  public toString() {
    return this.value;
  }
}
