import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MaterialsListComponent } from "./materials-list/materials-list.component";
import { MaterialsDetailsComponent } from "./materials-details/materials-details.component";

const routes: Routes = [
  {
    path      : "list",
    component : MaterialsListComponent,
  },
  {
    path      : "details/:name",
    component : MaterialsDetailsComponent
  },
  {
    path       : "**",
    redirectTo : "/materials/list",
  },
];

@NgModule({
  imports : [RouterModule.forChild(routes)],
  exports : [RouterModule],
})
export class MaterialsRoutingModule { }
