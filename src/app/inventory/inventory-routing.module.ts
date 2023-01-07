import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { InventoryListComponent } from "./inventory-list/inventory-list.component";
import { InventoryResolver } from "./inventory.resolver";

const routes: Routes = [
  {
    path      : "list",
    component : InventoryListComponent,
    resolve   : {
      routeResolver: InventoryResolver
    }
  },
  {
    path       : "**",
    redirectTo : "/inventory/list",
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class InventoryRoutingModule {}
