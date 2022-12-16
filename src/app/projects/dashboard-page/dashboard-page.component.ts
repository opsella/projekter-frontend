import { Component, OnInit } from '@angular/core';
import {ProjectDataService} from "../project-data.service";
import {map, Observable} from "rxjs";
import {Project} from "../models/project";
import {MatTableDataSource} from "@angular/material/table";
import {ActivatedRoute, Data} from "@angular/router";

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {
    private projectsDataSource: MatTableDataSource<Project> = new MatTableDataSource<Project>([]);
    public projectsDataSource$: Observable<MatTableDataSource<Project>> = this.activatedRoute.data
        .pipe(
            map((data: Data) => data["projectsData"] as Project[]),
            map((projects?: Project[]) => {
                this.projectsDataSource.data = projects ?? [];
                return this.projectsDataSource;
            })
        );

  constructor(
      private projectDataService: ProjectDataService,
      private activatedRoute: ActivatedRoute
  ) {
      console.log(this.activatedRoute.data)
  }

  async ngOnInit(): Promise<any> {
  }

}
