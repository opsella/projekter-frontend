import { Routes } from "@angular/router";
import { TeamListComponent } from "./team-list/team-list.component";
import {EmployeesDashboardComponent} from "./employees-dashboard/employees-dashboard.component";

export const teamRoutes: Routes = [
  {
    path: "dashboard",
    component: EmployeesDashboardComponent,
  },
  {
    path: "list",
    component: TeamListComponent,
  },
  {
    path: "**",
    redirectTo: "/team/dashboard",
  },
];
