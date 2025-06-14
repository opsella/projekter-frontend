import { Routes } from "@angular/router";
import { AuthGuard } from "@auth0/auth0-angular";

export const routes: Routes = [
  {
    path: "auth",
    loadChildren: () =>
      import("./authentication/auth.routes").then((m) => m.authRoutes),
  },
  {
    path: "registration",
    loadChildren: () =>
      import("./registration/registration.routes").then(
        (m) => m.registrationRoutes,
      ),
  },
  {
    path: "project",
    loadChildren: () =>
      import("./projects/projects.routes").then((m) => m.projectsRoutes),
    canActivate: [AuthGuard],
  },
  {
    path: "inventory",
    loadChildren: () =>
      import("./inventory/inventory.routes").then((m) => m.inventoryRoutes),
    canActivate: [AuthGuard],
  },
  {
    path: "team",
    loadChildren: () => import("./team/team.routes").then((m) => m.teamRoutes),
    canActivate: [AuthGuard],
  },
  {
    path: "user",
    loadChildren: () => import("./user/user.routes").then((m) => m.userRoutes),
    canActivate: [AuthGuard],
  },
  {
    path: "tenant",
    loadChildren: () =>
      import("./tenant/tenant.routes").then((m) => m.tenantRoutes),
    canActivate: [AuthGuard],
  },
  {
    path: "settings",
    loadChildren: () =>
      import("./settings/settings.routes").then((m) => m.settingsRoutes),
    canActivate: [AuthGuard],
  },
  {
    path: "**",
    redirectTo: "/project",
  },
];
