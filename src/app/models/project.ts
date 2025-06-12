export class Project {
  constructor(
    public name: string,
    public state: "Draft" | "Published",
    public time_tracking_id: string,
    public location: Location,
    public tasks: Task[],
    public photo?: string,
    public status_id?: string,
    public code?: string,
    public bill_of_materials_id?: string,
    public id?: string,
  ) {}
}

export class Task {
  constructor(
    public assigned_project_id: string,
    public name: string,
    public description: string,
    public due_date?: Date,
    public completed_at?: Date,
    public id?: string
  ) {
  }
}

export class Location {
  constructor(
    public address?: Address,
    public gps_coordinates?: GpsCoordinates
  ) {
  }
}

export class Address {
  constructor(
    public address_lines: string[],
    public state: string,
    public city: string,
    public postal_code: string,
    public country: string
  ) {
  }
}

export class GpsCoordinates {
  constructor(
    public latitude: number,
    public longitude: number
  ) {
  }
}
