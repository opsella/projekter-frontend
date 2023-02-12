import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SettingsListComponent } from "./settings-list/settings-list.component";


const routes: Routes = [
  {
    path      : "list",
    component : SettingsListComponent,
  },
  {
    path       : "**",
    redirectTo : "/settings/list",
  },
];

@NgModule({
  imports : [RouterModule.forChild(routes)],
  exports : [RouterModule],
})
export class SettingsRoutingModule {}
