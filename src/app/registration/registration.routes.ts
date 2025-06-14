import { Routes } from "@angular/router";
import { RegisterComponent } from "./register/register.component";
import { AuthGuard } from "@auth0/auth0-angular";
import { claimGuardGuard } from "../authentication/claim-guard.guard";

export const registrationRoutes: Routes = [
  {
    path: "register",
    component: RegisterComponent,
    canActivate: [AuthGuard, claimGuardGuard(["tenant:write", "user:write"])],
  },
  {
    path: "**",
    redirectTo: "/registration/register",
  },
];
