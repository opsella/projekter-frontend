import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { ListComponent } from "./list/list.component";

const routes: Routes = [
  {
    path      : "list",
    component : ListComponent
  },
  {
    path       : "**",
    redirectTo : "/inventory/list",
  },
];

@NgModule({
  imports : [RouterModule.forChild(routes)],
  exports : [RouterModule],
})
export class InventoryRoutingModule {}
