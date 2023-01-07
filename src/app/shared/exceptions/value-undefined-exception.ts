export class ValueUndefinedException extends Error {
  constructor(public property: string, message: string) {
    super(message);
  }

}
