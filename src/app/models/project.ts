import { ProjectStatusId } from "./ids/project-status-id";
import { TimeTrackingId } from "./ids/time-tracking-id";
import { BillOfMaterialsId } from "./ids/bill-of-materials-id";

export class CreateProjectRequest {
  constructor(
    public name: string,
    public status: ProjectStatusId,
    public photo?: URL,
    public location?: Location
  ) {
  }
}

export type ProjectState = "Draft" | "Published";

export interface ProjectResponse {
  name: string;
  state: ProjectState;
  time_tracking_id: string;
  location: Location;
  tasks: Task[];
  photo?: string;
  status_id?: string;
  code?: string;
  bill_of_materials_id?: string;
  id?: string;
}


export class Project {
  constructor(
    public name: string,
    public state: ProjectState,
    public time_tracking_id: TimeTrackingId,
    public location: Location,
    public tasks: Task[],
    public photo?: string,
    public status_id?: ProjectStatusId,
    public code?: string,
    public bill_of_materials_id?: BillOfMaterialsId,
    public id?: string,
  ) {}

  public static fromResponse(response: ProjectResponse): Project {
    return new Project(
      response.name,
      response.state,
      TimeTrackingId.fromJSON(response.time_tracking_id),
      response.location,
      response.tasks,
      response.photo,
      response.status_id ? ProjectStatusId.fromJSON(response.status_id) : null,
      response.code,
      response.bill_of_materials_id ? BillOfMaterialsId.fromJSON(response.bill_of_materials_id) : null,
      response.id
    )
  }
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
