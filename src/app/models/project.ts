import { ProjectStatusId } from "./ids/project-status-id";
import { TimeTrackingId } from "./ids/time-tracking-id";
import { BillOfMaterialsId } from "./ids/bill-of-materials-id";
import { ProjectId } from "./ids/project-id";
import { SpecificationId } from "./ids/specification-id";
import { TaskId } from "./ids/task-id";

export class CreateProjectRequest {
  constructor(
    public name: string,
    public status: ProjectStatusId,
    public photo?: URL,
    public location?: Location,
  ) {}
}

export class ProjectAddTaskRequest {
  constructor(
    public project_id: ProjectId,
    public name: string,
    public description: string,
    public due_date: Date
  ) {
  }
}

export class ProjectAddSpecificationRequest {
  constructor(
    public project_id: ProjectId,
    public code: string,
    public title: string,
    public description: string,
  ) {}
}

export class ProjectTaskCompletionRequest {
  constructor(
    public project_id: ProjectId,
    public task_id: TaskId,
    public fullname: string,
    public completion_date: Date,
    public signature_data_url: string
  ) {}
}

export type ProjectState = "Draft" | "Published";

export interface ProjectResponse {
  name: string;
  state: ProjectState;
  time_tracking_id: string;
  location: Location;
  tasks: ProjectTaskResponse[];
  specifications: SpecificationResponse[];
  photo?: string;
  status_id?: string;
  code?: string;
  bill_of_materials_id?: string;
  id?: string;
}

export interface ProjectTaskResponse {
  id: string;
  assigned_project_id: string;
  name: string;
  description: string;
  due_date?: Date;
  completed_at?: Date;
}

export interface SpecificationResponse {
  id: string;
  project_id: string;
  code: string;
  title: string;
  description: string;
  issued_at_date: Date;
  revision: number;
  last_revision_date?: Date;
}

export class Project {
  constructor(
    public id: ProjectId,
    public name: string,
    public state: ProjectState,
    public time_tracking_id: TimeTrackingId,
    public location: Location,
    public tasks: Task[],
    public specifications: Specification[],
    public photo?: string,
    public status_id?: ProjectStatusId,
    public code?: string,
    public bill_of_materials_id?: BillOfMaterialsId,
  ) {}

  public static fromResponse(response: ProjectResponse): Project {
    return new Project(
      ProjectId.fromJSON(response.id),
      response.name,
      response.state,
      TimeTrackingId.fromJSON(response.time_tracking_id),
      response.location,
      response.tasks?.map(
        (t: ProjectTaskResponse): Task => Task.fromResponse(t),
      ),
      response.specifications?.map(
        (s: SpecificationResponse): Specification =>
          Specification.fromResponse(s),
      ),
      response.photo,
      response.status_id ? ProjectStatusId.fromJSON(response.status_id) : null,
      response.code,
      response.bill_of_materials_id
        ? BillOfMaterialsId.fromJSON(response.bill_of_materials_id)
        : null,
    );
  }
}

export class Task {
  constructor(
    public id: TaskId,
    public assigned_project_id: ProjectId,
    public name: string,
    public description: string,
    public due_date?: Date,
    public completed_at?: Date,
  ) {}

  public static fromResponse(task: ProjectTaskResponse) {
    return new Task(
      TaskId.fromJSON(task.id),
      ProjectId.fromJSON(task.assigned_project_id),
      task.name,
      task.description,
      task.due_date ? new Date(task.due_date) : null,
      task.completed_at ? new Date(task.completed_at) : null,
    );
  }
}

export class Specification {
  constructor(
    public id: SpecificationId,
    public project_id: ProjectId,
    public code: string,
    public title: string,
    public description: string,
    public issued_at_date: Date,
    public revision: number,
    public last_revision_date?: Date,
  ) {}

  public static fromResponse(spec: SpecificationResponse) {
    return new Specification(
      SpecificationId.fromJSON(spec.id),
      ProjectId.fromJSON(spec.project_id),
      spec.code,
      spec.title,
      spec.description,
      new Date(spec.issued_at_date),
      spec.revision,
      spec.last_revision_date ? new Date(spec.last_revision_date) : null,
    );
  }
}

export class Location {
  constructor(
    public address?: Address,
    public gps_coordinates?: GpsCoordinates,
  ) {}
}

export class Address {
  constructor(
    public address_lines: string[],
    public state: string,
    public city: string,
    public postal_code: string,
    public country: string,
  ) {}
}

export class GpsCoordinates {
  constructor(
    public latitude: number,
    public longitude: number,
  ) {}
}
