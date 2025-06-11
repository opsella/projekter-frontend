export class Project {
  constructor(
    public name: string,
    public state: "Draft" | "Published",
    public photo?: string,
    public id?: string,
    public status_id?: string,
    public code?: string,
    public description?: string,
  ) {}
}
