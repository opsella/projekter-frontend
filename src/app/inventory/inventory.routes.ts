import { Routes } from "@angular/router";
import { InventoryListComponent } from "./inventory-list/inventory-list.component";

export const inventoryRoutes: Routes = [
  {
    path: "list",
    component: InventoryListComponent,
  },
  {
    path: "**",
    redirectTo: "/inventory/list",
  },
];
