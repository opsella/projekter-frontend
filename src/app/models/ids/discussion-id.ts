import {Id} from "./id";

export class DiscussionId extends Id {
  constructor(value: string) {
    super(value);
  }

  protected override isValid(value: string): boolean {
    return super.isValid(value, "discussion");
  }

  public static fromJSON(input: string): DiscussionId {
    return new DiscussionId(input);
  }
}
