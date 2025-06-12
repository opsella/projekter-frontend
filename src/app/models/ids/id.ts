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

  protected abstract isValid(value: string): boolean;

  /**
   * This is used by JSON.stringify() to convert to a status
   */
  private toJSON() {
    return this.value;
  }

  private toString() {
    return this.value;
  }
}
