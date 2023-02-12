import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TemplatesListComponent } from "./templates-list/templates-list.component";


const routes: Routes = [
  {
    path      : "list",
    component : TemplatesListComponent,
  },
  {
    path       : "**",
    redirectTo : "/templates/list",
  },
];

@NgModule({
  imports : [RouterModule.forChild(routes)],
  exports : [RouterModule],
})
export class TemplatesRoutingModule {}
