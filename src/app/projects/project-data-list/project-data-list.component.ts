import { Component, Input } from "@angular/core";
import { ArrayDataSource, DataSource } from "@angular/cdk/collections";
import { Project } from "../models/project";

@Component({
  selector    : "app-project-data-list",
  templateUrl : "./project-data-list.component.html",
  styleUrls   : [
    "./project-data-list.component.scss"
  ]
})
export class ProjectDataListComponent {
  @Input() public projects: DataSource<Project> = new ArrayDataSource([
  ]);

}
