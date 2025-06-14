import { Routes } from "@angular/router";
import { DashboardPageComponent } from "./dashboard-page/dashboard-page.component";
import { AuthGuard } from "@auth0/auth0-angular";
import { ProjectDetailsComponent } from "./project-details/project-details.component";

export const projectsRoutes: Routes = [
  {
    path: "list",
    component: DashboardPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "details/:id",
    component: ProjectDetailsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "**",
    redirectTo: "/project/list",
  },
];
