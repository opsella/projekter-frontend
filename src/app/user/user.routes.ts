import { Routes } from "@angular/router";
import { ProfileComponent } from "./profile/profile.component";
import { SettingsComponent } from "./settings/settings.component";
import { RegisterComponent } from "./register/register.component";
import { AuthGuard } from "@auth0/auth0-angular";

export const userRoutes: Routes = [
  {
    path: "register",
    component: RegisterComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "profile",
    component: ProfileComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "settings",
    component: SettingsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "**",
    redirectTo: "/user/profile",
  },
];
