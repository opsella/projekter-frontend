import { Routes } from "@angular/router";
import { ProfileComponent } from "./profile/profile.component";
import { SettingsComponent } from "./settings/settings.component";

export const userRoutes: Routes = [
  {
    path: "profile",
    component: ProfileComponent,
  },
  {
    path: "settings",
    component: SettingsComponent,
  },
  {
    path: "**",
    redirectTo: "/user/profile",
  },
];
