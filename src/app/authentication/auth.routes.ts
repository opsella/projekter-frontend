import { Routes } from "@angular/router";

export const authRoutes: Routes = [
  {
    // This is required for auth0 organization invitations
    path: "authorize",
    redirectTo: "https://dev-8nen27hb.us.auth0.com/authorize",
  },
];
