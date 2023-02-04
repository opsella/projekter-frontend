import { Component } from "@angular/core";
import { ProjectDataService } from "../project-data.service";
import { map, Observable } from "rxjs";
import { Project } from "../models/project";
import { ActivatedRoute, Data } from "@angular/router";
import { MatTableDataSource } from "@angular/material/table";
import { ExpansionTableData } from "../../shared/tables/expandable-data";

@Component({
  selector    : "app-dashboard-page",
  templateUrl : "./dashboard-page.component.html",
  styleUrls   : ["./dashboard-page.component.scss"]
})
export class DashboardPageComponent  {
  private projectsDataSource: MatTableDataSource<ExpansionTableData<Project>> = new MatTableDataSource<ExpansionTableData<Project>>([]);
  public projectsDataSource$: Observable<MatTableDataSource<ExpansionTableData<Project>>> = this.activatedRoute.data
    .pipe(
      map((data: Data) => data["projectsData"] as ExpansionTableData<Project>[]),
      map((projects?: ExpansionTableData<Project>[]) => {
        this.projectsDataSource.data = projects ?? [];
        return this.projectsDataSource;
      })
    );

  constructor(
    private projectDataService: ProjectDataService,
    private activatedRoute: ActivatedRoute
  ) { }
}
