import { SettingsListComponent } from "./settings-list/settings-list.component";
import { Routes } from "@angular/router";

export const settingsRoutes: Routes = [
  {
    path: "list",
    component: SettingsListComponent,
  },
  {
    path: "**",
    redirectTo: "/settings/list",
  },
];
