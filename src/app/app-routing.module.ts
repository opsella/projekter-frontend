import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path         : "projects",
    loadChildren : () => import("./projects/projects.module").then(m => m.ProjectsModule)
  },
  {
    path         : "inventory",
    loadChildren : () => import("./inventory/inventory.module").then(m => m.InventoryModule)
  },
  {
    path         : "team",
    loadChildren : () => import("./team/team.module").then(m => m.TeamModule)
  },
  {
    path         : "templates",
    loadChildren : () => import("./templates/templates.module").then(m => m.TemplatesModule)
  },
  {
    path         : "user",
    loadChildren : () => import("./user/user.module").then(m => m.UserModule)
  },
  {
    path         : "settings",
    loadChildren : () => import("./settings/settings.module").then(m => m.SettingsModule)
  }
];

@NgModule({
  imports : [RouterModule.forRoot(routes)],
  exports : [RouterModule],
})
export class AppRoutingModule {}
