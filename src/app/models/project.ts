export class Project {
  constructor(
    public name: string,
    public start_timestamp: string,
    public end_timestamp: string,
    public id?: string,
    public code?: string,
    public description?: string,
  ) {}
}
