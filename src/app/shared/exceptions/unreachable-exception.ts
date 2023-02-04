export class UnreachableException extends Error {
  constructor(message?: string) {
    super(message ?? "We expect that this should never be called");
  }
}
