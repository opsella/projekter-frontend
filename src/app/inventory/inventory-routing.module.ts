import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { InventoryListComponent } from "./inventory-list/inventory-list.component";

const routes: Routes = [
  {
    path      : "list",
    component : InventoryListComponent
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
