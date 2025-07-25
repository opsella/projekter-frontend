import {Id} from "./id";

export class TeamId extends Id {
  constructor(value: string) {
    super(value);
  }

  protected override isValid(value: string): boolean {
    return super.isValid(value, "team");
  }

  public static fromJSON(input: string): TeamId {
    return new TeamId(input);
  }
}
