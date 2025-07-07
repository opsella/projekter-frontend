import { Id } from "./id";

export class TimeTrackingId extends Id {
  constructor(value: string) {
    super(value);
  }

  protected override isValid(value: string): boolean {
    return super.isValid(value, "time");
  }

  public static fromJSON(input: string): TimeTrackingId {
    return new TimeTrackingId(input);
  }
}

