import {Id} from "./id";

export class MessageId extends Id {
  constructor(value: string) {
    super(value);
  }

  protected override isValid(value: string): boolean {
    return super.isValid(value, "message");
  }

  public static fromJSON(input: string): MessageId {
    return new MessageId(input);
  }
}
