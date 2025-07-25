import { Routes } from "@angular/router";
import { TeamListComponent } from "./team-list/team-list.component";
import {EmployeesDashboardComponent} from "./employees-dashboard/employees-dashboard.component";
import {TeamDetailsComponent} from "./team-details/team-details.component";

export const teamRoutes: Routes = [
  {
    path: "dashboard",
    component: EmployeesDashboardComponent,
  },
  {
    path: "employees",
    component: EmployeesDashboardComponent,
  },
  {
    path: "teams",
    component: TeamListComponent,
  },
  {
    path: "details/:id",
    component: TeamDetailsComponent
  },
  {
    path: "**",
    redirectTo: "/team/teams",
  },
];
