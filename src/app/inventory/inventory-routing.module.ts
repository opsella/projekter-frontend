import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { InventoryListComponent } from "./inventory-list/inventory-list.component";
import { InventoryDetailsComponent } from "./inventory-details/inventory-details.component";

const routes: Routes = [
  {
    path      : "list",
    component : InventoryListComponent
  },
  {
    path      : "details/:name",
    component : InventoryDetailsComponent
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
