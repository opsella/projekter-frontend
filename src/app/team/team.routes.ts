import { Routes } from "@angular/router";
import { TeamListComponent } from "./team-list/team-list.component";

export const teamRoutes: Routes = [
  {
    path: "list",
    component: TeamListComponent,
  },
  {
    path: "**",
    redirectTo: "/team/list",
  },
];
