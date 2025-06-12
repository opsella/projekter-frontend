import { Id } from './id';

export class TimeTrackingId extends Id {
  constructor(value: string) {
    super(value);
  }

  protected isValid(value: string): boolean {
    return /^time_[0-9A-Fa-f]{8}-?[0-9A-Fa-f]{4}-?4[0-9A-Fa-f]{3}-?[89ABab][0-9A-Fa-f]{3}-?[0-9A-Fa-f]{12}$/.test(value);
  }

  public static fromJSON(input: string): TimeTrackingId {
    return new TimeTrackingId(input);
  }
}


